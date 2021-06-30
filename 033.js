//Object Literal Syntax Extension
//특정 키를 
//오브젝트를 설정할때, 동적으로 바뀔때 이렇게 써라! 

var firstName = "John";
var lastName = "Doe";


var person = {
    firstName: firstName,
    lastName: lastName
}
person[firstName]

var type = "student";
var score = {
    //Syntax Extension자체가 [type]이다.
    [type]: "John Doe",
    // student: "John Doe",
    score: 95
};

//대괄호를 쓰는순간 그 값으로 치환이된다? 
console.log(score.student);
console.log(score["student"]);
console.log(score[type]);