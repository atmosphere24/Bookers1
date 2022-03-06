let name;
let username;
let userresult;
let answer = prompt("お名前を教えてください。");
if(answer == ''){
    username = "名無し"
}else{
    username = answer
}
document.getElementById("name").innerHTML = username;

let rand = Math.floor( Math.random() *5);
if(rand == 0){
    userresult = "大吉";
}else if(rand == 1){
    userresult = "中吉";
}else if(rand == 2){
    userresult = "小吉";
}else if(rand == 3){
    userresult = "吉";
}else if(rand == 4){
    userresult ="凶";
}
document.getElementById("result").innerHTML = userresult;