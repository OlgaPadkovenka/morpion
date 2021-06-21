const cells = document.querySelectorAll(".case");

const winnerList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let markList = [];
let timeoutId;

const markCircle = (e) => {
    if(mark(e.target, "circle")) {
        pauseGame();
        timeoutId = setTimeout(markCross, 2000);
    };   
};

const markCross = () => {
    timeoutId = null;
    console.log("CPU mark");
    let freeCase = []; 

    for (let i = 0; i < 9; i++) {
        if(!markList[i]) {
            freeCase.push(i);
        }
    }
    const index = freeCase[Math.round(Math.random() * (freeCase.length - 1))];
    
    if(0 !== index && !index) {
        startGame();
    } else if (mark(cells[index], "cross")) {
        resumeGame();
    };
}; 

//fonction qui peut servir pour deux
const mark = (cell, mark) => {
    const index = parseInt(cell.id.substr(4));
    if (markList[index]) {
        //j'ai pas marqué, ca s'est arrêté.
        return false;
    }

    cell.classList.add(mark);
    markList[index] = mark; 

    // mettre 5 quand il y aura l'ordi
    if(5 > markList.length || !hasWin(mark)) {
        return true;
        //j'ai marqué et j'ai pas gagné 
    }
    stopGame();
    "circle" === mark ? incrementPlayer() : incrementCPU();
    return false;
}; 

const stopGame = () => {
    stop();  
    disapearAppear(btnPause, btnStart);
    pauseGame();
    popUpWin();
};

const hasWin = (mark) => {
    for (const win of winnerList) {
        if (mark === markList[win[0]] && 
            mark === markList[win[1]] &&
            mark === markList[win[2]]
            ) {
                console.log("Vous avez gagné!");
                console.log( );
                            //pop up win
                            //popUpWin();
                
             return true;
        }
    }
   //console.log("je vérifie la victoire");
   return false;
}


const startGame = () => {
    cells.forEach((cell) => {
        cell.addEventListener("click", markCircle); 
    });
};

//desable
const pauseGame = () => {
    cells.forEach((cell) => {
        clearTimeout(timeoutId);
        cell.removeEventListener("click", markCircle);
    });
};

//enable
const resumeGame = () => {
    if(timeoutId) {
        markCross();
    }
    cells.forEach((cell) => {
        cell.addEventListener("click", markCircle);
    });
};

const initGame = () => {
    markList.splice(0);
    cells.forEach((cell) => {
        cell.classList.remove("circle", "cross");
    });
    resumeGame(); 
};

btnStart.addEventListener("click", initGame);
btnPause.addEventListener("click", pauseGame);
btnResume.addEventListener("click", resumeGame);