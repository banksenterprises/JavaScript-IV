// CODE here for your Lambda Classes ok


Person 

1. Name
2. Age
3. Location
4. Speak()
    return `Hello my name is Fred, I am from Miami.`

// Person Class
class GameObject {
    constructor (gameAttributes) {}
        destroy() {
            return `${this.name} was removed from the game.`;
    }
}

Instructor
same as Person
1. specialty
2. favLanguage
3. catchPhrase
4. demo(subject)
    return `Today we are learning about subject.`
5. grade(student, subject)
    return `name receives a perfect score on subject.`

Student 
same as Person
1. previousBackground
2. className
3. favSubjects
4. listsSubjects
5. PRAsignment()
    return `name has submitted a PR for subject.`
6. sprintChallenge()
    return `name has begun sprint challenge on subject.`

Project Manager 
same as Instructor 
1. gradClassName
2. favInstructor
3. standUp()
    return `name announces to channel, @channel standy times!`
4. debugsCode()
    return `name debugs student's code on subject.`

