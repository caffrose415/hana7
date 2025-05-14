import {
    useImperativeHandle,
    type ForwardedRef,
    type PropsWithChildren,
    type RefObject,
} from 'react';
import { useCounter } from '../contexts/counter/useCounter';

export type HelloHandler = {
    xx: string;
    sayHello: () => void;
};

type Props = {
    name: string;
    age: number;
    helloButtonRef: RefObject<HTMLButtonElement | null>;
    refx: ForwardedRef<HelloHandler>;
};

// {name: '홍길동'}
export default function Hello({
    name,
    age,
    helloButtonRef,
    children,
    refx,
}: PropsWithChildren<Props>) {
    const { plusCount } = useCounter();
    const helloHandler = {
        xx: 'XXXX',
        sayHello() {
            alert(`Hello, Mr.${name}!`);
        },
    };

    // refx.current = helloHandler;
    useImperativeHandle(refx, () => helloHandler);

    return (
        <div className="border">
            <h3>
                Hello {name} <small>({age})</small>
            </h3>
            <div>{children}</div>
            <button ref={helloButtonRef} onClick={plusCount}>
                count + 1
            </button>
        </div>
    );
}
