const btnStart = document.querySelector("#timerStart");
const btnPause = document.querySelector("#timerPause");
const btnResume = document.querySelector("#timerResume");


const timer = document.querySelector("#timerTime");
const date = new Date(0); 

let intervalId = 0;

let tourJoueurMessage = true;

let messageJoueur = "C'est votre tour!";
let messageCPU = "C'est le tour du CPU!";



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
    messageJeuStart();
};

 const messageJeuStart = () => {
//     const divMessageJoueur = document.createElement("div");
//     divMessageJoueur.id = ("messageStart");

//     divMessageJoueur.innerHTML = `
//     <div class="container">
//         <div class="row justify-content-center">
//             <div class="alert alert-success mb-2 text-center w-50 justify-item-center" role="alert">
//             ${messageJoueur}
//             </div>
//         </div>
//     </div>`;
//     const main = document.querySelector("main");
//     main.appendChild(divMessageJoueur);

//     <div class="alert alert-success" role="alert">
//   Это уведомление об успехе — check it out!
// </div>

     tourJoueurMessage = console.log("C'est votre tour!");
 }


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