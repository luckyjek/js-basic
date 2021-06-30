//Object Destructuring

function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "john@gmail.com",
        city: "Jeju-si",
        country: "Republic of korea"

    };
}

// var person = getPerson();
// console.log(person.firstName);
// console.log(person.lastName);

//Object이면, 값이 각각 할당 다 되버린것이다. --진짜많이 쌓인다.
var {
    firstName,
    lastName
} = getPerson();

console.log(firstName);
console.log(lastName);