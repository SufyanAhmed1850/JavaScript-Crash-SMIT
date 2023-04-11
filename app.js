function foo(num1) {
    return function (num2) {
        return num1 + num2;
    }
}
console.log(foo(3)(15));


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
    var subject = document.getElementById(target);
    subject.style.backgroundColor = color
}

var response = []
function addObj() {
    var person = {
        name: prompt("Enter Person's Name."),
        age: +prompt("Enter his Age."),
        profession: prompt("Enter his Profession."),
        language: prompt("Enter his Language")
    }
    response.push(person)
    console.log(response)
}
function saveObjectToLocal(storeWithName, objName) {
    var stringify = JSON.stringify(objName);
    localStorage.setItem(storeWithName, stringify);
}


function getObjectFromLocal(key) {
    var prevArr = localStorage.getItem(key)
    response = prevArr ? JSON.parse(prevArr) : []
    return console.log(response);
}