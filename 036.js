//Array Destructuring
// function getScores() {
//     return [70, 21, 100, 50, 12, 33, 45];
// }
//args 배열할당 
// var [x, y, ...args] = getScores();

// console.log(x);
// console.log(y);
// console.log(z);

// var scores = getScores();
// scores[0];
// scores[1];
// scores[2];

function getPerson() {
    return [
        "John",
        "Doe",
        ["Red", "Green", "Blue"]
    ]
}

// var [firstNmae, lastName, favoriteColor] = getPerson();
//favoriteColor 가 즉,  [color1, color2, color3]이다.
var [firstNmae, lastName, [color1, color2, color3]] = getPerson();
console.log(color1);


// function getCoordinates() {
//     return [12.32222, 43.2222];
// }
// //[경도, 위도];
// var coodinates = getCoordinates(); //[경도, 위도];
// coodinates[0]; //경도
// coodinates[1]; //위도

// //정확한 변수명을가지고 하고싶을때 ,Array Destructuring를  사용한다 
// var [longitituem, latitude] = getCoordinates(); //[경도, 위도];