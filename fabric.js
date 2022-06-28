class Member {
    constructor (position, salary, minExperience) {
        this.position = position;
        this.salary = salary;
        this.minExperience = minExperience;
    }
};

class MemberFactory {
    create(position) {
        if (position === 'intern') return new Member(position, 500, 0);
        if (position === 'junior') return new Member(position, 700, 6);
        if (position === 'middle') return new Member(position, 1000, 12);
        if (position === 'senior') return new Member(position, 2000, 18);
    }
}


const factory = new MemberFactory();

const junior = factory.create('junior');

console.log("junior");