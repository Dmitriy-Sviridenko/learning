// class Animal {
//   constructor(options){
//     this.name = options.name
//     this.color = options.color
//   }

//   voice() {
//     console.log("Base voice from ", this.name)
//   }
// }

// class Cat extends Animal{
//   constructor(options){
//     super(options)

//     this.hasTail = options.hasTail
//     this.type = "cat"
//   }
// }

// const dog = new Animal({name: "Rex", color: "White"})

// const cat = new Cat ({name: "Sam", color: "White", hasTail: true})


class Employees {
    constructor(options){
      this.first_name = options.first_name
      this.surname = options.surname
      this.salary = options.salary
      this.pepe = options.color
  }

  employ_info() {console.log(this.first_name, this.surname + " has salary " + this.salary + " RUR" );}
}


const employer_1 = new Employees({first_name: "Ivan" , surname: "Ivanov", salary: 20000, color: "white"})


employer_1.employ_info()

console.log(employer_1.pepe)



const person_1 = {}; 

person_1.surname = 'Pavlov'; 
person_1.name = "Vasya"



const person_2 = {
  surname: 'Levin',
  name: "Viktor" 
}


console.log(person_1)
console.log(person_2)

