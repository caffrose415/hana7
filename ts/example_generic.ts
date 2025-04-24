interface IUser {
    id: number;
    age: number;
    name: string;
}

interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

type Change<T, K extends keyof T, U> = {
    [x in keyof T]: x extends K ? U : T[x];
};

type DeptCaptain = Change<IDept, 'captain', IUser>;
//type Err = Change<IDept, 'xxx', IUser>;

//---------------------------------------------------------------------

type Item = { item: string; price: number };
type ItemPrice<T, U> = {
    [x in keyof T]: x extends 'item' ? keyof U : T[x];
};

const stock = { X: 1, Y: 2, Z: 30 } as const;

const itemPrices: ItemPrice<Item, typeof stock>[] = [
    { item: 'X', price: 1000 },
    { item: 'Y', price: 2000 },
    { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce(
    (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
    0
);

//-------------------------------------------------------------------------

type TPropertyKeyType = string | number | symbol;
type TUser = { [key: string]: string | number };

function deleteArray<T>(
    arr: TUser[] | number[],
    startOrKey: TPropertyKeyType,
    endOrValue?: unknown
) {
    if (typeof startOrKey === 'number') {
        if (typeof endOrValue === 'number') {
            return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
        }
        return arr.slice(0, startOrKey);
    }

    if (typeof startOrKey === 'string') {
        return arr.filter((e) => {
            if (e && typeof e === 'object') {
                return e[startOrKey] !== endOrValue;
            }
        });
    }

    return [];
}
