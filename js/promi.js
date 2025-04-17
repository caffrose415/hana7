class Promise {
    constructor(nbfn) {
        nbfn(this.runSuccess.bind(this), this.runFail.bind(this));
    }

    runSuccess(ret) {
        this.thenFn(ret);
    }
    runFail(err) {
        this.catchFn(err);
    }
    then(f) {
        this.thenFn = f;
        return this;
    }
    catch(errFn) {
        this.catchFn = errFn;
    }
}
const promi = (delay) =>
    new Promise((resolve, reject) => {
        //setTimeout(resolve, delay, "done!");
        setTimeout(reject, delay, "Error!");
    });

//promi(1000, (ret) => console.log(ret));
promi(1000)
    .then(console.log)
    .catch((err) => console.log("Error!!", err));
