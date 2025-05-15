import {
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
    type FormEvent,
} from 'react';
import { useSession } from '../contexts/session/SessionContext';
import { useCounter } from '../contexts/counter/useCounter';
import { useInterval, useTimeout } from '../hooks/useTimer';

export type LoginHandler = {
    str: string;
    getName: () => string;
    makeX: (n: number) => void;
    focusId: () => void;
    validate: () => boolean;
};

export default function Login() {
    const { login, loginHandler: loginHandlerRef } = useSession();
    const { plusCount, minusCount } = useCounter();
    const [x, setX] = useState(0);
    const idRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const loginHandler: LoginHandler = {
        str: 'STRING',
        makeX(n: number) {
            setX(n);
        },
        focusId() {
            idRef.current?.focus();
        },
        getName() {
            return nameRef.current?.value || '';
        },
        validate() {
            const id = Number(idRef.current?.value);
            const name = nameRef.current?.value;

            if (!id || isNaN(id)) {
                alert('Input the user id!');
                idRef.current?.focus();
                return false;
            } else if (!name) {
                alert('Input the user name!');
                nameRef.current?.focus();
                return false;
            }

            return true;
        },
    };

    useImperativeHandle(loginHandlerRef, () => loginHandler);

    const makeLogin = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const id = Number(idRef.current?.value);
        const name = nameRef.current?.value ?? '';

        login(id, name);
    };

    useEffect(() => {
        plusCount();
        return minusCount;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useTimeout(console.log, 1000, 'Hong', x);
    useTimeout(console.log, 1000, 'Kim', 99);

    // // interval도 만들었다면,
    useInterval(setX, 1000, x + 1);
    // useInterval(console.log, 1000, x);

    return (
        <form onSubmit={makeLogin}>
            <div>
                LoginID({x}):
                <input ref={idRef} type="number" />
            </div>
            <div>
                LoginName:
                <input type="text" ref={nameRef} />
            </div>
            <button type="reset">Cancel</button>
            <button type="submit">Login</button>
        </form>
    );
}
