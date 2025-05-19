import { useActionState, useOptimistic, useState } from 'react';
import { useFormStatus } from 'react-dom';
type User = { id: number; name: string };

async function searchUser(userId: string) {
    return fetch(
        `https://jsonplaceholder.typicode.com/users/${userId.at(-1)}`
    ).then((res) => res.json());
}

type Msg = { text: string; sending?: boolean };
// async function searchUser(userId: string) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve({ id: userId, name: 'Sampler' }), 1000);
//     });
// }

export default function Trans() {
    const [str, setStr] = useState('');
    const [list, search, isPending] = useActionState(
        async (preList: User[], formData: FormData) => {
            const value = formData.get('value')?.toString() ?? '';
            setStr(value);
            setOptimisticMessage(value);
            const data = (await searchUser(value)) as User;
            console.log('🚀 data:', data, preList);
            return [data];
        },
        []
    );

    const [optimisticMessage, setOptimisticMessage] = useOptimistic(
        { text: ' ', sending: false },
        (currState: Msg, text: string) => {
            console.log('🚀 ~ Trans ~ optimisticValue:', text);
            console.log('🚀 ~ Trans ~ currState:', currState);
            return { text, sending: false };
        }
    );

    return (
        <>
            <h3>{isPending ? <Spinner /> : str}</h3>
            <h4>
                {optimisticMessage.sending && 'Search...'}
                <strong style={{ color: 'red' }}>
                    {optimisticMessage.text}
                </strong>
            </h4>
            {/* <Likes active={DataTransfer.isLike || optimisticLIke}/> */}
            <form action={search}>
                <input type="text" name="value" placeholder="userId..." />
                <DesignedButton />
            </form>
            <ul>
                {list.map(({ id, name }) => (
                    <li key={id}>
                        {id}. {name}
                    </li>
                ))}
            </ul>
            <hr />
        </>
    );
}

function Spinner() {
    return <strong>Pending...</strong>;
}

function DesignedButton() {
    const { pending } = useFormStatus();
    // const { pending, data, method, action } = useFormStatus();
    // console.log('🚀 ~ DesignedButton ~ data:', data, method, action);

    return <button disabled={pending}>DesignedButton</button>;
}
