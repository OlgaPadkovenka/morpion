let cells;
let markList;
let timeoutId;
let winnerList;

const initGride = () => {
    initTimer();
    initScore();
    cells = $(".case");
    markList = [];
    timeoutId;
    winnerList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
btnStart.on("click", initGame);
btnPause.on("click", pauseGame);
btnResume.on("click", resumeGame);
}

 const markCircle = (e) => {
    const target = $(e.target);
     if(mark(target, "circle")) {
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
        stopGame("Personne n'a gagné!", "Essayez encore une fois!");
    } else if (mark($(cells[index]), "cross")) {
        resumeGame();
    };
}; 

//fonction qui peut servir pour deux
const mark = (cell, mark) => {
    const celljquery = $(cell);
    const index = parseInt(celljquery.attr("id").substr(4));
    if (markList[index]) {
        //j'ai pas marqué, ca s'est arrêté.
        return false;
    }

    celljquery.addClass(mark);
    markList[index] = mark; 

    // mettre 5 quand il y aura l'ordi
    if(5 > markList.length || !hasWin(mark)) {
        return true;
        //j'ai marqué et j'ai pas gagné 
    }
    //modal avec condition des messages
    if ("circle" === mark) {
        incrementPlayer();
        stopGame("Vous avez gagné!", "Félicitations!");
        return false;
    }
    incrementCPU();
    stopGame("Le CPU a gagné!", "Essaye encore une fois!");
    // stopGame();
    // "circle" === mark ? incrementPlayer() : incrementCPU();
    return false;
}; 

const stopGame = (titre, description) => {
    stop();  
    disapearAppear(btnPause, btnStart);
    pauseGame();
    popUpWin(titre, description);
   
};

const hasWin = (mark) => {
    for (const win of winnerList) {
        if (mark === markList[win[0]] && 
            mark === markList[win[1]] &&
            mark === markList[win[2]]
            ) {
                console.log("Vous avez gagné!");
                            //pop up win
                            //popUpWin();
                
             return true;
        }
    }
   //console.log("je vérifie la victoire");
   return false;
}


const startGame = () => {
    cells.each((index, cell) => {
        const celljquery = $(cell);
        celljquery.on("click", markCircle); 
    });
};

//desable
const pauseGame = () => {
    cells.each((index, cell) => {
        const celljquery = $(cell);
        clearTimeout(timeoutId);
        celljquery.off("click", markCircle);
    });
};

//enable
const resumeGame = () => {
    if(timeoutId) {
        markCross();
    }
    cells.each((index, cell) => {
        const celljquery = $(cell);
        celljquery.on("click", markCircle);
    });
};

const initGame = () => {
    markList.splice(0);
    cells.each((index, cell) => {
        const celljquery = $(cell);

        //si'il y a pluqieurs classe, il faut []
        celljquery.removeClass(["circle", "cross"]);
    });
    resumeGame(); 
};
