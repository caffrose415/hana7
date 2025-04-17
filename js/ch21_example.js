const depthTimer = (depth) => {
    let delay = depth * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`depth${depth} ${new Date()}`);
            if (depth >= 3) {
                reject(new Error("Already 3-depth"));
            } else {
                resolve((depth += 1));
            }
        }, delay);
    });
};

console.log("START!", new Date());
depthTimer(1).then(depthTimer).then(depthTimer).catch(console.error);
