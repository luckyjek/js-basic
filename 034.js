//Spread Operator 
//배열, 문자열같은 형태의 데이터를 요소 하나 하나 모두 분리해서 사용할수있게해주는 문법이다.

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3]; //1,2,3

//분해해서 각각의 별개로 만들어버리는것이다.
//var arr3 = [...arr2, ...arr1];
//1,2,3,4,5,6

//즉 , 문자열 그리고 배열에있는 데이터를 분리해서 각각만들어준다.
var cd = "CD"; //C,D
var alphabet = ["A", "B", ...cd]; //A,B,C,D,E,F,G