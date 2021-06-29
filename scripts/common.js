//별도로 자바스크립트 파일을 사용하면 혼자만쓰는것이아니므로
//아래와같은 주석을 잘 달아줘야된다. 
// /하고 **을 하고 enter하면된다. 


//대규모로 사용할때 ->  Type스크립트를 꼭 써준다
//규약을 맺고, 사용하는것이다.
/**
 * //함수가 어떤 기능을 하는지 
 * @param {*} userList 
 * @param {*} keyAge 
 * @returns 
 */
function getAgeGroup(userList, keyAge) {
    let userAgeGroup = {};

    for (var user of userList) {
        // console.log(user.age);

        var ageGroup = user[keyAge].toString().charAt(0) + "0"; // 20
        // console.log(userAgeGroup[ageGroup]);

        if (userAgeGroup[ageGroup]) {
            userAgeGroup[ageGroup]++;
        } else {
            userAgeGroup[ageGroup] = 1;
        }
    }

    return userAgeGroup;
}
/**
 * 
 * @param {*} userList 
 * @param {*} keyAge 
 * @returns 
 */
function getAgeGroup2(userList, keyAge) {
    let myMap = new Map();

    for (let user of userList) {
        var ageFirtStr = user[keyAge].toString()[0];
        var ageGroup = ageFirtStr.padEnd(2, "0");

        // 2가 올텐데.. 
        if (myMap.has(ageGroup)) {
            myMap.set(ageGroup, myMap.get(ageGroup) + 1);
        } else {
            myMap.set(ageGroup, 1);
        }

    }

    return myMap;
}

/**
 * 최소값과 최대값을 파라미터로 받고 그 사이의 무작위(random) 정수 값을 반환하는 함수
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number} min과 max사이의 랜덤 정수 값 
 */
function getRandomInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * 가위바위보 함수
 * @param {*} userRsp 
 * @returns 
 */
function rspPlayer(userRsp) {
    const rsp = ["가위", "바위", "보"];
    const playerRsp = rsp[getRandomInterger(0, 2)];
    const winValue = {
        "가위": "보",
        "바위": "가위",
        "보": "바위",
    };

    // console.log(winValue[userRsp]);

    // userRsp == playerRsp //0
    return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": (userRsp == playerRsp) ? 0 : (winValue[userRsp] == playerRsp) ? 1 : -1
    }
}