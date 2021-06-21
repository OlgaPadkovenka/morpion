const btnStart = document.querySelector("#timerStart");
const btnPause = document.querySelector("#timerPause");
const btnResume = document.querySelector("#timerResume");


const timer = document.querySelector("#timerTime");
const date = new Date(0); 

let intervalId = 0;


const disapearAppear = (disapear, appear) => {
disapear.classList.replace("d-block", "d-none");
appear.classList.replace("d-none", "d-block");
};

const increment = () => {
    timer.innerText = date.toISOString().substr(14, 5);
    date.setSeconds(date.getSeconds() + 1);
};

const start = () => {
    date.setTime(0);
    increment();
    disapearAppear(btnStart, btnPause);
    intervalId = setInterval(increment, 1000);
};


const pause = () => {
    disapearAppear(btnPause, btnResume);
    stop();
};

const resume = () => {
    disapearAppear(btnResume, btnPause);
    intervalId = setInterval(increment, 1000);
};

const stop = () => {
    clearInterval(intervalId);
};

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnResume.addEventListener("click", resume);