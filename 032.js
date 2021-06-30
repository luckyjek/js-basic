//Template Literals
//Hello Jeremy. Welcome!

// function hello(name) {
//     console.log("Hello" + name + ".Wlecome!");
// }


//Template Literals사용하여 문자열을 이용한다.
function hello2(name, name2 = "Jeremy") {
    console.log(`Hello ${name}.Welcome ${name2}!`);
}

hello2("Jeremy");