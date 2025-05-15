import { useEffect, useRef } from 'react';

export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
    cb: T,
    delay: number,
    ...args: Parameters<T>
) => {
    // console.log('🚀 Timeout.args:', args);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const clear = () => clearTimeout(timerRef.current);

    useEffect(() => {
        timerRef.current = setTimeout(() => cb(...args), delay);

        return () => clearTimeout(timerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, ...args]);

    const reset = () => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(cb, delay, ...args);
    };

    return { reset, clear };
};

export const useInterval = <
    T extends (...args: Parameters<T>) => ReturnType<T>
>(
    cb: T,
    delay: number,
    ...args: Parameters<T>
) => {
    const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
    console.log('SET-INTERVAL', timerRef.current, delay);

    const clear = () => {
        console.log('Clear!!', timerRef.current, delay);
        clearInterval(timerRef.current);
    };

    useEffect(() => {
        timerRef.current = setInterval(cb, delay, ...args);
        console.log('**************', timerRef.current, delay);

        return clear;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, ...args]);

    const reset = () => {
        // console.log('RESET!!', timerRef.current, delay);
        clear();
        timerRef.current = setInterval(cb, delay, ...args);
        // console.log('RESET22!!', timerRef.current, delay);
    };

    return { reset, clear };
};

// old
export const useTimeoutOld = <T extends unknown[]>(
    cb: (...args: T) => void,
    delay: number,
    ...args: T
) => {
    console.log('🚀 Timeout.args:', args);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const clear = () => clearTimeout(timerRef.current);

    useEffect(() => {
        timerRef.current = setTimeout(cb, delay, ...args);

        return clear;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, ...args]);

    const reset = () => {
        clear();
        timerRef.current = setTimeout(cb, delay, ...args);
    };

    return { reset, clear };
};
