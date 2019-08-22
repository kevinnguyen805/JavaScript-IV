// CODE here for your Lambda Classes

/*
Build a data set - People
     * Instructors - extensions of Person
     * Students - extensions of Person
     * Project Managers - extensions of Instructors 
     * IMPORTANT - you need to create 2-3 objects for each class and test them according to their unique attributes
*/
 
// Person - home base
class Person{
     constructor(props){                             
          this.name = props.name;
          this.age = props.age;
          this.location = props.location;
     }
     speak(){
          return `Hello, my name is ${this.name}, I am from ${this.location}.`;
     }
}

// Instructor
class Instructor extends Person{
     constructor(props){
          super(props);
          this.specialty = props.specialty;
          this.favLanguage = props.favLanguage;
          this.catchPhrase = props.catchPhrase;
     }
     demo(subject){
          return `Today we are learning about ${subject}`;             
     }
     grade(student,subject){
          return `${student.name} receives a perfect score on ${subject}`;     
     }
}

// Student
class Students extends Person{
     constructor(props){
          super(props);
          this.previousBackground = props.previousBackground;
          this.className = props.className;
          this.favSubjects = props.favSubjects;        
     }
     listSubjects(){
          this.favSubjects.forEach(function(subject){                    
               console.log(subject);
          })
     }
     assignment(subject){
          return `${this.name} has submitted a PR for ${subject}`;        
     }
     sprintChallenge(subject){
          return `${this.name} has begun sprint challenge on ${subject}`;   
     }
     
}

// Project Manager
class ProjectManager extends Instructor{
     constructor(props){
          super(props);
          this.gradClassName = props.gradClassName;
          this.favInstructor = props.favInstructor;
     }
     standUp(channel){
          return `${this.name} announces to ${channel}, @channel standy times!`;
     }
     debugsCode(student, subject){
          return `${this.name} debugs ${student.name}'s code on ${subject}`;        
     }
}


// People objects 
const barry = new Person({
     name: 'Barry',
     age: 42,
     location: 'New York'
})
const harris = new Person({
     name: 'Harris',
     age:50,
     location:'Seattle'
})

// Instructor Objects 
const ricky = new Instructor({
     name: 'Ricky',
     age: 32,
     location:'San Francisco',
     specialty: 'Back-end',
     favLanguage: 'React',
     catchPhrase: 'Can we streamline that?'
});
const fred = new Instructor({
     name: 'Fred',
     age: 37,
     location: 'Bedrock',
     favLanguage: 'JavaScript',
     specialty: 'Front-end',
     catchPhrase: `Don't forget the homies`
});

// Student Objects
const kevin = new Students({
     name: 'Kevin',
     age: 22,
     location: 'Santa Barbara',
     previousBackground: 'biology',
     className: 'WEB23',
     favSubjects: ['HTML', 'CSS', 'Javascript']
});
const gabe = new Students({
     name: 'Gabe',
     age: 21,
     location: 'Santa Barbara',
     previousBackground: 'economics',
     className: 'WEBXY',
     favSubjects: ['Math', 'Data Science', 'Statistics']
});
const rika = new Students({
     name: 'Rika',
     age: 21,
     location: 'Santa Barbara',
     previousBackground: 'microbiology',
     className: 'WEBXX',
     favSubjects: ['Immunology', 'Genetics', 'MatLab']
});

// Project Manager Objects
const gwen = new ProjectManager({
     name: 'Gwen',
     location: 'San Jose',
     age: 29,
     favLanguage: 'HTML',
     specialty: 'Front-end',
     catchPhrase: `Can we talk about that at standup? `,
     gradClassName: 'CS101',
     favInstructor: 'Sean'
});
const brit = new ProjectManager({
     name: 'Brit',
     location: 'San Diego',
     age: 34,
     favLanguage: 'Python',
     specialty: 'Data Science',
     catchPhrase: `I can make that into a chart`,
     gradClassName: 'DS42',
     favInstructor: 'Charles'
});


// Object tests
console.log(barry);
console.log(ricky);
console.log(kevin);
console.log(gwen);

// Method tests
console.log(ricky.grade(kevin,'Responsive Design'));
console.log(kevin.listSubjects());
console.log(gabe.sprintChallenge('python'));
console.log(brit.debugsCode(kevin, 'javascript'));