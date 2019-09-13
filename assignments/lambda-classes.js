// CODE here for your Lambda Classes ok

// Person Class
class Person {
    constructor (personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
        speak() {
            return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
        demo() {
            return `Today we are learning about ${this.specialty}.`;
    }
        grade() {
            return `${this.name} receives a perfect score on ${this.specialty}.`;
}
}

class Student extends Person {
    constructor (studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.listsSubjects = studentAttributes.listsSubjects;
    }
        PRAsignment() {
            return `${this.name} has submitted a PR for ${this.specialty}.`;
        }
        sprintChallenge() {
            return `${this.name} has begun a Sprint Challenge on ${this.specialty}.`;
}
}


class PM extends Instructor {
    constructor (pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
        standUp() {
            return `${this.name} announces to channel, @channel standy times!`;
        }
        debugsCode() {
            return `${this.name} debugs student's code on ${this.specialty}.`;
}
}

const carlos = new Student({
    name: "Carlos",
    age: 23,
    location: "Miami",
    previousBackground: "Engineer",
    className: "Javascript IV",
    favSubjects: "HTML & CSS",
    listsSubjects: "React, Javascript",
    

})

console.log(carlos.sprintChallenge());