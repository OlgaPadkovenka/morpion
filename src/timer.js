let btnStart;
let btnPause;
let btnResume;


let timer;
let date; 

let intervalId;

const initTimer = () => {
    btnStart = $("#timerStart");
    btnPause = $("#timerPause");
    btnResume = $("#timerResume");


    timer = $("#timerTime");
    date = new Date(0); 

    intervalId = 0;

    btnStart.on("click", start);
    btnPause.on("click", pause);
    btnResume.on("click", resume);
 };


const disapearAppear = (disapear, appear) => {
disapear.addClass("d-none").removeClass("d-block");
appear.addClass("d-block").removeClass("d-none");
};

const increment = () => {
    timer.text(date.toISOString().substr(14, 5));
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
