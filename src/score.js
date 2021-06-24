let scorePlayer;
let scoreCPU;

const initScore = () => {
    scorePlayer = 0;
    scoreCPU = 0;

$("main").append($(`<div class="spinner-border text-primary" role="status">
<span class="sr-only"></span>
</div>`));

//GET
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.jsonbin.io/b/60d32b765ed58625fd177060");
xhr.setRequestHeader("secret-key", "$2b$10$JHV550lWSj.GVKTEpqRyUODAuIC3K/dZtizuBbFzzhYnOD.CRPHNe");

//Analyer la réponse
//si la réponse est executée sans erreur
xhr.onload = () => {
    console.log("J'ai la réponse GET onload");
    //console.log(xhr.response); //ici j'ai la réponse
    const data = JSON.parse(xhr.response);
    console.log(data);

    //je recupère le data de JSON de score 
    $("#scorePlayer").text(data.scorePlayer);
    $("#scoreCPU").text(data.scoreCPU);

    //je l'affiche le spinner au chargement
    $(".spinner-border").remove();
};
xhr.send();
console.log("J'ai la réponse GET send");

//PUT
let req = new XMLHttpRequest();
req.open("PUT", "https://api.jsonbin.io/b/60d32b765ed58625fd177060", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("secret-key", "$2b$10$JHV550lWSj.GVKTEpqRyUODAuIC3K/dZtizuBbFzzhYnOD.CRPHNe");

req.onload = () => {
    const dataPut = JSON.parse(req.response);
    console.log(dataPut);
    console.log("J'ai la réponse PUT onload");
};

req.send();

};


const incrementPlayer = () => {
    scorePlayer +=1;
    $("#scorePlayer").text(scorePlayer);
};


const incrementCPU = () => {
    scoreCPU +=1;
    $("#scoreCPU").text(scoreCPU);
};

// let req = new XMLHttpRequest();
// req.open("PUT", "https://api.jsonbin.io/b/60d32b765ed58625fd177060", true);
// req.setRequestHeader("Content-Type", "application/json");
// req.setRequestHeader("secret-key", "$2b$10$JHV550lWSj.GVKTEpqRyUODAuIC3K/dZtizuBbFzzhYnOD.CRPHNe");

// req.onload = () => {
//     const dataPut = JSON.parse(req.response);
//     console.log(dataPut);
//     console.log("J'ai la réponse PUT onload");
// };

// req.send();