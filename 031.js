//함수 선언식 
function add() {

}

//함수 표현식
var add = function (x1, x2) {
    var sum = x1 + x2;
    return sum;
};

//Arrow Function - 선언식은 아니고-> 표현식인데, 화살표함수로 바꾸는것이다. //코드수가줄어든다
var add = (x1, x2) => x1 + x2;

var add2 = function (x1, x2) {
    var sum = x1 + x2;
    return sum;
};

var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
}




//비교 -- 무조건 변수안에 넣어줘야된다. -- 스코프 개념이 무조건 들어간다.
function say(message) {}

var say = (message) => {};


//비교
function myFuncion() {}

var mmyFuncion = () => {};

//Function 키워드삭제 
//