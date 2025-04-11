const dog = {
    name: "Maxx",
    showMyName() {
        console.log(`My name is ${this.name}.`);
    },
    whatsYourName() {
        //setTimeout(this.showMyName.bind(this), 1000); 1번 방법
        setTimeout(() => {
            this.showMyName();
        }, 1000); //2번방법
    },
};

dog.whatsYourName();
