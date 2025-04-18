const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
// const myFetch = (url) => fetch(url).then((res) => res.json());
// const res = myFetch(sampleUrl);
// console.log(" myFetch:", res);
// res.then(console.log);

const myFetchAsync = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log("data>>", data);
    return data;
};
const res2 = await myFetchAsync(sampleUrl);
console.log(" res2:", res2);

// fetch(sampleUrl)
//     .then((res) => {
//         //console.log("res : ", res);
//         return res.json();
//     })
//     .then((data) => console.log("data>> ", data));
