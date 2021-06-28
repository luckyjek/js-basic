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


function getRandomInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


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