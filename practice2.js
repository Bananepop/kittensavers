// Quiz sorpresa #1

class Computer { // Blueprint for the Class
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    welcomeMessage = () => {
        return this.brand + " " + this.model
    }
}
const myComputer = new Computer("Apple", "MacBookAir") // Instantiation of the class => a real thing
console.log(myComputer.welcomeMessage()) // call the menthod of the class-instance




class Car { // Blueprint, class-declaration
    constructor(brand, constructionYear) { // set intiial values for the class during instantination
        this.brand = brand;
        this.constructionYear = constructionYear;
    }
    drive = () => {
        console.log("Brumm")
    }
}
const tommysCar = new Car("Volvo", 1988) // Instatiate
console.log(tommysCar) // Print whole instance
const gabysCar = new Car("Porsche", 2023) // Instatiate
console.log(gabysCar.constructionYear) // just print property of the class-instance

// let computer = {
//     brand: "Apple",
//     model: "MacbookPro",
//     ram: ["8gb", "16gb", "32gb"],
//     cpu: "arm",
//     year: 2022,
//     myComputer: () => {
//         return this.brand + " " + this.model + " " + this.year
//     }
// }

// console.log(computer.myComputer())
