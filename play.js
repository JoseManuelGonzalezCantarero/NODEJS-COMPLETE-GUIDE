const person = {
    name: "Manu",
    age: 32,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

person.greet();
