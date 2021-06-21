let scorePlayer = 0;
let scoreCPU = 0;

const incrementPlayer = () => {
    scorePlayer +=1;
    document.querySelector("#scorePlayer").innerText = scorePlayer;
};


const incrementCPU = () => {
    scoreCPU +=1;
    document.querySelector("#scoreCPU").innerText = scoreCPU;
};