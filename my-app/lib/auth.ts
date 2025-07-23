import NextAuth from 'next-auth';
import Credential from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Kakao from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';
import { credentialValidator } from './validator';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google,
    Github,
    Naver,
    Kakao,
    Credential({
      name: 'Email & Password',
      credentials: {
        email: { label: '이메일', type: 'email' },
        password: { label: '패스워드', type: 'password' },
      },
      async authorize(credentials) {
        console.log('🚀 credentials:', credentials);
        const validator = credentialValidator.safeParse(credentials);

        if (!validator.success) return null;

        const { email, password } = validator.data;

        return {
          email,
          password,
        };
      },
    }),
  ],

  session: {
    strategy: 'jwt', // Using JWT for session management
  },
  pages: {
    signIn: '/auth/signin', // Customize sign-in page..
    // error: '/ssss'
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('🚀 signIn - user:', user, account?.provider, profile);
      if (!user.email) return false;

      const { email } = user;
      const userData = await findUserByEmail(email);
      if (account?.provider === 'credentials') {
        const isValidPassword =
          userData?.passwd &&
          user.password &&
          (await compare(userData.passwd, user.password));

        if (!userData || !isValidPassword) return false;
        user.id = String(userData.id);
        user.name = userData.name;
        user.image = userData.image;
      } else {
        if (!userData) {
          delete user.id;
          const newer = await createUser(user as UserData);
          console.log('🚀 newer:', newer);
          user.id = String(newer.id);
          user.isadmin = newer.isadmin;
        } else {
          user.id = String(userData?.id);
        }
      }

      user.isadmin = userData?.isadmin;
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      console.log('🚀 trigger:', trigger, session);
      // console.log('🚀 jwt - token:', token, user);
      const userData = trigger === 'update' ? session : user;
      if (userData) {
        token.id = userData.id;
        token.email = userData.email;
        token.name = userData.name;
        token.picture = userData.image;
        token.isadmin = userData.isadmin;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log('🚀 cb - session:', session, token);
      if (token) {
        session.user.id = String(token.id);
        session.user.email = token.email as string;
        session.user.name = token.name;
        session.user.image = token.picture;
        session.user.isadmin = token.isadmin;
      }
      return session;
    },
  },
});

// const isAdminUser = (user: User): user is User & { isadmin: boolean } =>
//   'isadmin' in user;
