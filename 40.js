//정규식 //;
//regular expression


// var txt = "Hello World! world! ";
//  //; 표현을쓴다.
//g - global
//gi - 대소문자 관계없이 다 찾아줘!  
// var regxp = /World/gi;

// console.log(txt.replace("World", "Jermy"));
// console.log(txt.replace(regxp, "Jermy"));


// var str = "123abc456kkk";
// var regexp1 = /[0-9]/g;
// var result = str.match(regexp1); //찾을때마다 하나씩 리턴해준다.
// console.log(result);

// var str2 = "re, green, red, gree, gen,red, yellow, blue";
// var regexp2 = /(red|green)/g;
// var result2 = str2.match(regexp2);
// console.log(result2);


// var tel = "010-3008-9614";
// //010 숫자 - 4자리 숫자 - 4자리
// //전화번호 , 이메일주소 
// var regexp3 = /^(010)-\d{4}-\d{4}/;
// console.log(regexp3.test(tel));

//seungwon.go@gmail.com
//aaa234@abc.co.kr
//afef@foeof
// + : 문자가 최소한 1나보다는 더 많이 들어와야돼 
// $ : 효율적이다. 
// \d : 숫자
// \w : 문자

// 체크하는건 정규식 문법이 
// 글로벌 프로젝트 : 우편번호 - 국가별로 다 정규식을 만들어야된다.

var regexp4 = /^\w+@\w+(\.\w{2,3})+$/;

console.log(regexp4.test("seun@gmail.com"));