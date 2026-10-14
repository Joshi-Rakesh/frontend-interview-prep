const Person = {
  name: "Rakesh",
  sayHello: function (profession, location) {
    return `${this.name} is a ${profession} and works from ${location}`;
  },
};

const Person2 = { name: "Rakesh Joshi" };

// -------------------------call method------------------ //

console.log(
  "-----------CALL METHOD----------\n",
  Person.sayHello.call(Person2, "Software Engineer", "Chandigarh"),
);

// -------------------------apply method------------------ //

console.log(
  "-----------APPLY METHOD----------\n",
  Person.sayHello.apply(Person2, ["Software Engineer", "Chandigarh"]),
);

// -------------------------bind method------------------ //

const bindMethod = Person.sayHello.bind(
  Person2,
  "Software Engineer",
  "Chandigarh",
);

console.log("-----------BIND METHOD----------\n", bindMethod());
