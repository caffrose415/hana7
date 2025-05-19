import { useState, useTransition } from 'react';
type Comp = { id: number; name: string };

async function searchUser(userId: string) {
    return fetch(
        `https://jsonplaceholder.typicode.com/users/${userId.at(-1)}`
    ).then((res) => res.json());
}

export default function Trans() {
    const [str, setStr] = useState('');
    const [list, setList] = useState<Comp[]>([]);

    const [isPending, startTransition] = useTransition();

    const search = (formData: FormData) => {
        const value = formData.get('value')?.toString() ?? '';
        setStr(value);
        startTransition(async () => {
            const data = await searchUser(value);
            console.log('🚀 data:', data);
            setList([data]);
        });
        // startTransition(() => {
        //   const comps = [];
        //   for (let i = 0; i < 20000; i++) comps.push({ id: i, name: value });
        //   setList(comps);
        // });
    };

    return (
        <>
            <h3>{isPending ? <Spinner /> : str}</h3>
            <form action={search}>
                <input type="text" name="value" placeholder="userId..." />
                <button formAction={search}>searchButton</button>
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
