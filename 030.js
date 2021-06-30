//Rest Parameter
//파마미터로 전달되는 게 무엇인지 모를때 사용(...something)
// function add(x1, x2) {
//     return x1 + x2;
// }

//Node.js는 자바스크립트를 실행할수있는 실행기이다.
//웹애플리케이션만 만들수있었는데, Node.js는 웹밖에서 실행할수있게해줬다.
//키오스크또한 만들수있고, 미니컴퓨팅 IOT기기, 
//이전의 웹서버는 무조건다른언어로 개발했어야했지만,
//현재는 자바스크립틔 node.js로
//웹서버도, 데스크탑 어플리케이션, 키오스크 등등 다 만들수있음으로 js 파일 

function add(...nums) {
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 5, 3, 5, 6, 6));

//var nums =[2, 5, 3, 5, 6, 6]; //자동으로 배열값으로 들어간다. 

// function add(x1, x2, x3) {
//     return x1 + x2 + x3;
// }

// function add(x1, x2) {
//     return x1 + x2;
// }