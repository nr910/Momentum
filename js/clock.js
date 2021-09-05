const clock = document.querySelector("h2#clock");

function getClock(){
    console.log("Hello");
}


//?  setInterval(funcion의 이름, 호출시간);
// setInterval(sayHello, 5000); // 5초마다 호출



//? setTimeout
// setTimeout(sayHello, 5000);

//?  5.1 date.get


function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000); // 5초마다 호출


//? 5.2 PadStart
// "1".padStart(2,"0") // 문자 길이가 2이고 2가 아닐때 앞쪽에 0을 추가하는 것
// "1".padEnd(2, "0")  // 문자 길이가 2이고 2가 아닐때 뒷쪽에 0을 추가하는것
// "Hello"padStart(20, "x") "xxxxxxxxxxxxxxxHello" 이런식으로!

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock, 1000); // 1초마다 호출 // 실시간으로 보여게 하는 부분

