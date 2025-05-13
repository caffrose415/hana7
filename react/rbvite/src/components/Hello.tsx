import {
    useImperativeHandle,
    type ForwardedRef,
    type PropsWithChildren,
    type RefObject,
} from 'react';

export type HelloHandler = {
    xx: string;
    sayHello: () => void;
};

type Props = {
    name: string;
    age: number;
    plusCount: () => void;
    helloButtonRef: RefObject<HTMLButtonElement | null>;
    refx: ForwardedRef<HelloHandler>;
};

// {name: '홍길동'}
export default function Hello({
    name,
    age,
    plusCount,
    helloButtonRef,
    children,
    refx,
}: PropsWithChildren<Props>) {
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
