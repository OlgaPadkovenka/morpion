const cells = document.querySelectorAll(".case");
let tourJoueur = true; //tour joueur
let tourCPU = true;
let tourGagnant = false; //pas obligatoire
let mark = true;
let move = 0; //ход

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

const markCircle = (e) => {
      
     tourJoueurMessage ? console.log(messageJoueur) : console.log(messageCPU);
     
    let mark = tourJoueur ? "circle" : "cross" ; // if (tourJour) est vrai, circle, sinon, cross

    const index = parseInt(e.target.id.substr(4));
    e.target.classList.add(mark);
    markList[index] = mark; 

    if(mark === "circle") {
        pauseGame();
    }

    // //подсчет ходов start
    // if (move%2 !== 0) {
    //     mark = "cross";
    // } else {
    //     mark = "circle";
    // }
    // move++;
    // //подсчет ходов end move%2 !== 0 1, 3, 5... move%2 == 0, 2, 4, 6

  
    //ход компьютера
    setTimeout(function(){ 
        while (true) {
            let r = randomInt(0,8);
            if(markList[index] === "circle") {
                document.querySelectorAll(".case")[r].classList.add("cross");
                break;
            }
        }
        move++;
        hasWin();
    }, 3000);


    console.log(move);

    if (markList[index]) {
        //case déjà prise true ou false
        return false;
    }

    tourJoueur = !tourJoueur; // true --> false, false --> true ca passe à un autre joueur

    tourJoueurMessage = !tourJoueurMessage;
    
    // mettre 5 quand il y aura l'ordi
    if(5 > markList.length) {
        return;
    } else if (!hasWin(mark)) {
        return;
    }
};

  // Случайное целое число в диапазоне min-max
  let randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
    
};

// const hasWin = (mark) => {
//     for (const win of winnerList) {
//         if (mark === markList[win[0]] && 
//             mark === markList[win[1]] &&
//             mark === markList[win[2]]
//             ) {
//                 console.log("Vous avez gagné!");
//                 console.log( );
//                             //pop up win
//                             //popUpWin();
                
//              return true;
//         }
//     }
//    //console.log("je vérifie la victoire");
//    return false;
// }


const hasWin = () => {
    for (const win of winnerList) {
            //ничья добавить
        if ("circle" === markList[win[0]] && 
            "circle"  === markList[win[1]] &&
            "circle"  === markList[win[2]] ) {
                tourGagnant = true; 
            
            console.log("Vous avez gagné!");
            incrementPlayer();

            // refresh le scoore, appear button start 
            stop();  
            disapearAppear(btnPause, btnStart);
            pauseGame();
            popUpWin();
            //break;
        }

        if ("cross" === markList[win[0]] && 
            "cross" === markList[win[1]] &&
            "cross" === markList[win[2]]) {
                tourGagnant = true; 
           
            console.log("Le CPU a gagné!");
            incrementCPU();

            // refresh le scoore, appear button start 
            stop();  
            disapearAppear(btnPause, btnStart);
            pauseGame();   
            popUpWin(); 
            //break;
        }
    }
  
}

const popUpWin = () => {
const divContainerWin = document.createElement("div");
divContainerWin.classList.add("modal");
divContainerWin.tabindex = "-1";

divContainerWin.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Félicitations!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Vous avez gagné!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>`;

const main = document.querySelector("main");
main.appendChild(divContainerWin);
let myModal = new bootstrap.Modal(divContainerWin);
myModal.show();
};

const startGame = () => {
    cells.forEach((cell) => {
        cell.addEventListener("click", markCircle); 
    });
};

const pauseGame = () => {
    cells.forEach((cell) => {
        cell.removeEventListener("click", markCircle);
    });
};

const resumeGame = () => {
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