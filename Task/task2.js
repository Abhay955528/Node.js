//Q.2

// let addSum = (a,b) => {
//     return a + b;
// }
// console.log(addSum(4,5));

// let name = "abhay";
// let age = 22;
// let hobbies = "hanges out with friend";

// age = 25;

// let student = (name, age, hobbies)=> {
//   return ("I am- " + name + " my age- " + age + " my hobbies- " + hobbies)
// };

// console.log(student(name, age, hobbies));

// let obj = {
//   name: "abhay",
//   age: 22,
//   hobbies: "hanges out with friend",
//   greet:function(){
//     console.log('i am - ' +this.name);
//   }
// };

// obj.greet();

// partice

class student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minAge) {
    console.log(this);
    return (palcementMarks) => {
      console.log(this);
      if (this.age > minAge && this.marks > palcementMarks) {
        console.log(this.name + " you are egiable");
      } else {
        console.log(this.name + " you are not egiable");
      }
    };
  }
}

// let golu = new student('abhay',22,40);
// let sonu = new student('sudhanshu',60,70);
// golu.setPlacementAge(40)(30)
// sonu.setPlacementAge(40)(30)

// let  array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// console.log(array.map(array=>{
//     return  array
// }));

console.log("a");
console.log("b");
setTimeout(() => console.log("c"), 3000);
setTimeout(() => console.log("d"), 0);
console.log("e");
