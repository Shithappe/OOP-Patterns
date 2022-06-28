let instance;

class Counter {
    constructor () {
        if (!instance) instance = this;
        instance.count = 0;
        return instance;
    }

    getCoutner() {
        return instance.count;
    }

    increaseCounter (value) {
        instance.Counter = instance.Counter + value
        return instance.count;
    }
}



const cout1 = new Counter();
const cout2 = new Counter();

cout1.increaseCounter(1);
cout2.increaseCounter(1);

console.log(cout1.getCoutner());    // 2
console.log(cout2.getCoutner());    // 2