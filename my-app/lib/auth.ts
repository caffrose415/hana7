import NextAuth from 'next-auth';
import Credential from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Kakao from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';

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
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required.');
        }

        const user = {
          id: 1,
          name: 'Cred. Hong',
          email: String(credentials.email),
          image: '/glove.svg',
        };

        if (!user) {
          throw new Error('Invalid email or password.');
        }

        // const isPasswordValid = await bcrypt.compare(
        //   credentials.password,
        //   user.password
        // );
        // if (!isPasswordValid) {
        //   throw new Error('Invalid email or password.');
        // }

        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],

  session: {
    strategy: 'jwt', // Using JWT for session management
  },
  pages: {
    signIn: '/auth/signin', // Customize sign-in page..
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = String(token.id);
        session.user.email = String(token.email);
        session.user.name = token.name;
        // session.user.phone = token.phone;
      }
      return session;
    },
  },
});
