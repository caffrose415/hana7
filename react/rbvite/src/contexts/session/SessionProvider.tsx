import { useCallback, useReducer, useRef, type PropsWithChildren } from 'react';
import {
    SessionContext,
    type Cart,
    type LoginUser,
    type Session,
} from './SessionContext';
import type { LoginHandler } from '../../components/Login';

const SampleSession: Session = {
    // loginUser: null,
    loginUser: { id: 1, name: 'Hong' },
    cart: [
        { id: 100, name: '라면1', price: 3000 },
        { id: 101, name: '컵라면12', price: 2000 },
        { id: 102, name: '신라면123', price: 2000 },
        { id: 200, name: '파', price: 5000 },
    ],
};

type Action =
    | { type: 'LOGIN'; payload: LoginUser }
    | { type: 'LOGOUT'; payload: null }
    | { type: 'ADD-ITEM'; payload: Cart }
    | { type: 'EDIT-ITEM'; payload: Cart }
    | { type: 'REMOVE-ITEM'; payload: number };

const reducer = (session: Session, { type, payload }: Action) => {
    switch (type) {
        case 'LOGIN':
        case 'LOGOUT':
            return { ...session, loginUser: payload };
        case 'ADD-ITEM':
            return {
                ...session,
                cart: [...session.cart, payload],
            };
        case 'EDIT-ITEM':
            return {
                ...session,
                cart: session.cart.filter((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        case 'REMOVE-ITEM':
            return {
                ...session,
                cart: session.cart.filter((item) => item.id !== payload),
            };
    }
};

export default function SessionProvider({ children }: PropsWithChildren) {
    // const [session, setSession] = useState<Session>(SampleSession);
    const [session, dispatch] = useReducer(reducer, SampleSession);

    const loginHandler = useRef<LoginHandler>(null);

    // const plusCount = () => setCount(c => c + 1);
    const login = useCallback((id: number, name: string) => {
        if (!loginHandler.current) return;
        const { getName, validate, str } = loginHandler.current;
        console.log('login>>>>', getName(), str);
        // if (validate()) setSession({ ...session, loginUser: { id, name } });
        if (validate()) dispatch({ type: 'LOGIN', payload: { id, name } });
    }, []);

    const logout = () => {
        // session.loginUser = null; // non-pure function!
        // setSession({ ...session, loginUser: null });
        dispatch({ type: 'LOGOUT', payload: null });
    };

    const removeItem = useCallback((id: number) => {
        // setSession({
        //   ...session,
        //   cart: session.cart.filter(item => item.id !== id),
        // });
        dispatch({ type: 'REMOVE-ITEM', payload: id });
    }, []);

    const addItem = (name: string, price: number) => {
        const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
        // setSession({ ...session, cart: [...session.cart, { id, name, price }] });
        dispatch({ type: 'ADD-ITEM', payload: { id, name, price } });
    };

    const editItem = (workingItem: Cart) => {
        // setSession({
        //   ...session,
        //   cart: session.cart.map(item =>
        //     item.id === workingItem.id ? workingItem : item
        //   ),
        // });
        dispatch({ type: 'EDIT-ITEM', payload: workingItem });
    };

    return (
        <SessionContext.Provider
            value={{
                session,
                login,
                logout,
                addItem,
                removeItem,
                editItem,
                loginHandler,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
