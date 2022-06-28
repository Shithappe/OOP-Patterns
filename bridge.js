class Model {
    constructor(color) {
        this.color = color;
    }
};

class Color {
    constructor(type) {
        this.type = type;
    }

    get(){
        return this.type;
    }
}



class BlackColor extends Color {
    constructor() {
        super("black");
    }
};

class WhiteColor extends Color {
    constructor() {
        super("White");
    }
}



class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: BMW, Color ${this.color.get()}`;
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, Color ${this.color.get()}`;
    }
}


const blackAudi = new Audi(new BlackColor());

console.log(blackAudi.paint());     // Auto: Audi, Color black