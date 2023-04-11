function foo() {
    return function (num) {
        return 5 + num;
    }
}
console.log(foo()(15));


var arr = ["eg1", "eg2", "eg3"];
var flag = false;
function arrSearch(value) {
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            flag = true;
            return true;
        }
        continue;
    }
    if (flag === false) {
        return false;
    }
}
console.log(arrSearch("eg1"));


function addPara(innerPara) {
    var para = document.createElement('p');
    para.innerText = innerPara
    document.body.appendChild(para)
}


function addListItem(innerList) {
    var list = document.createElement('li');
    list.innerText = innerList;
    var ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(list);
}


function changeBg(target, color) {
    if (target.includes("#")) {
        var subject = document.getElementById(target);
    } else if (target.includes(".")) {
        var subject = document.getElementsByClassName(target)[0];
    } else {
        var subject = document.getElementsByTagName(target)[0];
    }
    var bgColor = window.getComputedStyle(subject).backgroundColor;
    if (bgColor == "rgb(34, 34, 34)") {
        (function resetBg() {
            subject.style.backgroundColor = '#fff';
            subject.style.color = '#222';
        })();
    } else {
        subject.style.backgroundColor = color;
        subject.style.color = '#fff';
    }
}


function addStudent(storeKey, storeObj) {
    var json = JSON.stringify(storeObj);
    localStorage.setItem(storeKey, json);
}


function getObjectFromLocal(key) {
    var getJson = localStorage.getItem(key);
    if (!getJson) {
        return null;
    }
    return JSON.parse(getJson);
}
console.log(getObjectFromLocal("students"))