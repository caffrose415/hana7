import { useEffect, type RefObject } from 'react';
import { useSession } from '../contexts/session/SessionContext';
import Trans from './Trans';
import Posts from './Posts';

type Props = {
    logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

export default function Profile({ logoutButtonRef }: Props) {
    const {
        session: { loginUser },
        logout,
    } = useSession();

    const f = () => console.log('sss>>>', loginUser?.name);
    console.log('ffffffffffffffff');
    useEffect(() => {
        f();
    }, [f]);

    return (
        <>
            <Trans />
            <Posts />
            <h3>LoginUser: {loginUser?.name}</h3>
            <button ref={logoutButtonRef} onClick={logout}>
                LogOut
            </button>
        </>
    );
}
