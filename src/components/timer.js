import $ from 'jquery';

export class Timer {
    btnStart;
    btnPause;
    btnResume;
    timer;
    date;
    intervalId;


    constructor() {
        this.btnStart = $("#timerStart");;
        this.btnPause = $("#timerPause");
        this.btnResume = $("#timerResume");
        this.timer = $("#timerTime");
        this.date = new Date(0);
        this.intervalId = 0;

        this.btnStart.on("click", () => this.start());
        this.btnPause.on("click", () => this.pause());
        this.btnResume.on("click", () => this.resume());
    }

    disapearAppear(disapear, appear) {
        disapear.addClass("d-none").removeClass("d-block");
        appear.addClass("d-block").removeClass("d-none");
    }

    increment () {
        this.timer.text(this.date.toISOString().substr(14, 5));
        this.date.setSeconds(this.date.getSeconds() + 1);
    }

    start () {
        this.date.setTime(0);
        this.increment();
        this.disapearAppear(this.btnStart, this.btnPause);
        this.intervalId = setInterval(() => this.increment(), 1000);
    }

    pause () {
        this.disapearAppear(this.btnPause, this.btnResume);
        this.stop();
    }

    resume () {
        this.disapearAppear(this.btnResume, this.btnPause);
        this.intervalId = setInterval(() => this.increment(), 1000);
    }

    stop () {
        clearInterval(this.intervalId);
    }

}


// let btnStart;
// let btnPause;
// let btnResume;


// let timer;
// let date; 

// let intervalId;

// const initTimer = () => {
//     btnStart = $("#timerStart");
//     btnPause = $("#timerPause");
//     btnResume = $("#timerResume");


//     timer = $("#timerTime");
//     date = new Date(0); 

//     intervalId = 0;

//     btnStart.on("click", start);
//     btnPause.on("click", pause);
//     btnResume.on("click", resume);
//  };


// const disapearAppear = (disapear, appear) => {
// disapear.addClass("d-none").removeClass("d-block");
// appear.addClass("d-block").removeClass("d-none");
// };

// const increment = () => {
//     timer.text(date.toISOString().substr(14, 5));
//     date.setSeconds(date.getSeconds() + 1);
// };

// const start = () => {
//     date.setTime(0);
//     increment();
//     disapearAppear(btnStart, btnPause);
//     intervalId = setInterval(increment, 1000);
// };


// const pause = () => {
//     disapearAppear(btnPause, btnResume);
//     stop();
// };

// const resume = () => {
//     disapearAppear(btnResume, btnPause);
//     intervalId = setInterval(increment, 1000);
// };

// const stop = () => {
//     clearInterval(intervalId);
// };
