// // class and instance implementation
// // problem: redundancy of code
// class Professor{
//       name;
//       subject;
//       constructor (name, subject){this.name = name; this.subject = subject}
//       introduceYourself(){
//             console.log(`My name is: ${this.name} and I will be taking you through ${this.subject}`)
//       }
// }

// const Magoha = new Professor("Magoha", "Computer Application");

// console.log(Magoha.name);
// Magoha.introduceYourself()

// class Student{
//       name;
//       subject;
//       constructor(name, subject){this.name=name; this.subject=subject;}
//       introduceYourself(){
//             console.log(`My name is: ${this.name} and I'm learning ${this.subject}`)
//       }
// }

// const Smith = new Student("Smith", "Computer Application");

// console.log(Smith.name, Smith.subject);
// Smith.introduceYourself()

// solution to redundacy 
// Inheritance

class Person{
      name;
      subject;
      constructor(name, subject){this.name=name; this.subject=subject;}

      introduceYourself(){
            console.log(`My name is: ${this.name}`);
      }
}

// //class professor inheriting person

// class Professor extends Person{
//       personalNo;
//       constructor(personalNo, name, subject){
//             super(name, subject);
//             this.personalNo = personalNo;
            
//       }
//       whatDoYouDo(){
//             console.log(`I teach ${this.subject}`)
//       }
// }

// const Kaimenyi = new Professor("P346747", "Kaimenyi", "Maths")
// console.log(Kaimenyi.name, Kaimenyi.personalNo, Kaimenyi.subject);
// Kaimenyi.introduceYourself()
// Kaimenyi.whatDoYouDo()

// console.log(" ");
// console.log(" ");
// //student class inheriting person

// class Student extends Person{
//       regNo;
//       constructor(regNo, name, subject){super(name, subject), this.regNo=regNo}
//       whatDoYouDo(){console.log(`I learn ${this.subject}`)}
// }

// const Karen = new Student("reg355", "Karen", "Maths");

// console.log(Karen.name, Karen.regNo, Karen.subject);
// Karen.introduceYourself();
// Karen.whatDoYouDo();

// class to implement encapsulation

class ProfessorAssistant extends Person{
      #salary;
      constructor(salary, name, subject){
            super(name, subject);
            this.#salary = salary;
      }
      #whatDoYouDo(){
            console.log(this.#salary)
            console.log(`I assist with ${this.subject} lessons`)}
}

const Jael =  new ProfessorAssistant("$400", "Jael", "Psychology");

Jael.whatDoYouDo()