type SizeKey = 'XS' | 'S' | 'M' | 'L' | 'XL';

type S = { id: SizeKey; price: number }[];
const SIZE: S = [
    { id: 'XS', price: 8000 },
    { id: 'S', price: 10000 },
    { id: 'M', price: 12000 },
    { id: 'L', price: 14000 },
    { id: 'XL', price: 15000 },
];
// ] as const;

let s = 'abc' as const;

type SO = {
    [k in SizeKey]: number;
};

const sizeOption: SO = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
    (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
    0
);
console.log('🚀 totalPrice:', totalPrice);

export {};
