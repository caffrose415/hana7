import { createContext } from 'react';

type CounterContextProps = {
    count: number;
    plusCount: () => void;
};
export const CounterContext = createContext<CounterContextProps>({
    count: 0,
    plusCount: () => {},
});
