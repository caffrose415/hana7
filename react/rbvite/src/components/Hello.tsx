import type { PropsWithChildren } from 'react';

type Props = {
    name: string;
    age: number;
    plusCount: () => void;
    // children: ReactNode; // PropsWithChildren
};

// {name: '홍길동'}
export default function Hello({
    name,
    age,
    plusCount,
    children,
}: PropsWithChildren<Props>) {
    return (
        <div className="border">
            <h3>
                Hello {name} <small>({age})</small>
            </h3>
            <div>{children}</div>
            <button onClick={plusCount}>count + 1</button>
        </div>
    );
}
