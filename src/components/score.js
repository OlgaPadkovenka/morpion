import $ from 'jquery';

export class Score {
    scorePlayer;
    scoreCPU;

    constructor () {
        this.scorePlayer = 0;
        this.scoreCPU = 0;
    }
    
}

// let scorePlayer;
// let scoreCPU;

// const initScore = () => {
//     // scorePlayer = 0;
//     // scoreCPU = 0;
//      xhrGET();
//     // xhrPUT();

//GET AXAJ
//formuler la requette
//receptioner la réponse
// const xhr = () => {
//     $.axaj({
//         url:"https://api.jsonbin.io/b/60d32b765ed58625fd177060",
//         method: "GET",
//         headers: {
//             "secret-key": "$2b$10$JHV550lWSj.GVKTEpqRyUODAuIC3K/dZtizuBbFzzhYnOD.CRPHNe",
//         },
//         data: {
//             //ici des données
            
//         }
//     })
//     .then((data) => {
//         //ici, j'ai la réponse
//         console.log("then: ", data);
//     })
//     .catch(() => {
//         //si j'ai pas de réponse
//     })
// }

// };

// const xhrGET = () => {
//     $("main").append($(`<div class="spinner-border text-primary" role="status">
//     <span class="sr-only"></span>
//     </div>`));
    
//     //GET
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.jsonbin.io/b/60d453338a4cd025b7a49ea5");
//     xhr.setRequestHeader("secret-key", "$2b$10$JHV550lWSj.GVKTEpqRyUODAuIC3K/dZtizuBbFzzhYnOD.CRPHNe");
    
//     // //Analyer la réponse
//     // //si la réponse est executée sans erreur
//     xhr.onload = () => {
//         console.log("J'ai la réponse GET onload");
//         //console.log(xhr.response); //ici j'ai la réponse
//         const data = JSON.parse(xhr.response);
//         console.log(data);
    
//         //je recupère le data de JSON de score 
//         $("#scorePlayer").text(data.scorePlayer);
//         $("#scoreCPU").text(data.scoreCPU);
//         scorePlayer = data.scorePlayer;
//         scoreCPU = data.scoreCPU;
    
//         //je l'affiche le spinner au chargement
//         $(".spinner-border").remove();
//     };
//     xhr.send();
//     console.log("J'ai la réponse GET send");
    
// };

// const xhrPUT = () => {
//     $("main").append($(`<div class="spinner-border text-primary" role="status">
//     <span class="sr-only"></span>
//     </div>`));    

// //PUT
// let xhr = new XMLHttpRequest();
// xhr.open("PUT", "https://api.jsonbin.io/b/60d453338a4cd025b7a49ea5", true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("secret-key", "$2b$10$JHV550lWSj.GVKTEpqRyUODAuIC3K/dZtizuBbFzzhYnOD.CRPHNe");
// xhr.setRequestHeader("versioning", "false");

// xhr.onload = () => {

//     $(".spinner-border").remove();
// };

// let dataPut = {
//     "scorePlayer": scorePlayer,
//     "scoreCPU": scoreCPU
//   }
// let dataPutSend = JSON.stringify(dataPut);
// xhr.send(dataPutSend);
// console.log(dataPut);
// }; 


// const incrementPlayer = () => {
//     scorePlayer +=1;
//     $("#scorePlayer").text(scorePlayer);
//     xhrPUT();
// };


// const incrementCPU = () => {
//     scoreCPU +=1;
//     $("#scoreCPU").text(scoreCPU);
//     xhrPUT();
// };

// // let req = new XMLHttpRequest();
// // req.open("PUT", "https://api.jsonbin.io/b/60d32b765ed58625fd177060", true);
// // req.setRequestHeader("Content-Type", "application/json");
// // req.setRequestHeader("secret-key", "$2b$10$JHV550lWSj.GVKTEpqRyUODAuIC3K/dZtizuBbFzzhYnOD.CRPHNe");

// // req.onload = () => {
// //     const dataPut = JSON.parse(req.response);
// //     console.log(dataPut);
// //     console.log("J'ai la réponse PUT onload");
// // };

// // req.send();