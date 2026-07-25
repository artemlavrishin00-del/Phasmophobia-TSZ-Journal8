const ghosts = [
    {
        name: "Alienson",
        evidence: ["Peeing", "freezing", "MakingPhoto"]

    },
    {
        name: "Arsen",
        evidence: ["Pigging", "emf", "Peeing"]
    },
    {
        name: "Artyom",
        evidence: ["emf", "Pigging", "MoveItems"]
    },
        {
        name: "Blitz",
        evidence: ["HideItems", "MoveItems", "MakingPhoto"]
    },
        {
        name: "Bran",
        evidence: ["spiritbox", "ThrowingBottle", "MoveItems"]
    },
        {
        name: "Chormecalo",
        evidence: ["freezing", "Pigging", "MonkeyRot"]
    },
        {
        name: "Chresol",
        evidence: ["MakeSound", "MonkeyRot", "MoveItems"]
    },
        {
        name: "Chupakabra",
        evidence: ["ThrowingBottle", "Peeing", "MakingPhoto"]
    },
        {
        name: "Chuvurla",
        evidence: ["MakeSound", "Inscription", "ThrowingBottle"]
    },
        {
        name: "Croy",
        evidence: ["spiritbox", "HideItems", "MoveItems"]
    },
        {
        name: "Daunessa",
        evidence: ["freezing", "MonkeyRot", "MakeSound"]
    },
        {
        name: "Dima",
        evidence: ["ThrowingBottle", "Pigging", "HideItems"]
    },
        {
        name: "Dureo",
        evidence: ["Peeing", "MonkeyRot", "HideItems"]
    },
        {
        name: "Eibra",
        evidence: ["freezing", "Peeing", "HideItems"]
    },
        {
        name: "Frize",
        evidence: ["Inscription", "Peeing", "ThrowingBottle"]
    },
        {
        name: "Greshm",
        evidence: ["MonkeyRot", "MakingPhoto", "MakeSound"]
    },
    
        {
        name: "Hrasch",
        evidence: ["ThrowingBottle", "MakeSound", "MakingPhoto"]
    },
              {
        name: "Itacher",
        evidence: ["emf", "Inscription", "ThrowingBottle"]
    },
              {
        name: "Jox",
        evidence: ["emf", "Inscription", "freezing"]
    },
        {
        name: "Kalyon",
        evidence: ["spiritbox", "freezing", "Peeing"]
    },
        {
        name: "Limera",
        evidence: ["HideItems", "MakeSound", "MoveItems"]
    },
              {
        name: "Momo",
        evidence: ["emf", "Inscription", "spiritbox"]
    },
        {
        name: "Nelsi",
        evidence: ["emf", "Peeing", "MoveItems"]
    },
        {
        name: "NightWalk",
        evidence: ["emf", "ThrowingItems", "MoveItems"]
    },
              {
        name: "Oninoni",
        evidence: ["emf", "Inscription", "MakingPhoto"]
    },
        {
        name: "Parcharlt",
        evidence: ["emf", "Peeing", "spiritbox"]
    },
        {
        name: "Shaoran",
        evidence: ["Inscription", "Pigging", "HideItems"]
    },
        {
        name: "Skinwalker",
        evidence: ["Inscription", "MakingPhoto", "spiritbox"]
    },
        {
        name: "Stalker",
        evidence: ["MonkeyRot", "Pigging", "ThrowingBottle"]
    },
        {
        name: "Styopa",
        evidence: ["spiritbox", "Inscription", "MakeSound"]
    },
       {
        name: "Svintus",
        evidence: ["Peeing", "Pigging", "HideItems"]
    },
           {
        name: "Tvar",
        evidence: ["emf", "Inscription", "MonkeyRot"]
    },
              {
        name: "Uzhas",
        evidence: ["emf", "Inscription", "MakeSound"]
    },
        {
        name: "Vova",
        evidence: ["freezing", "MakingPhoto", "MoveItems"]
    },
        {
        name: "Wallrack",
        evidence: ["spiritbox", "freezing", "MonkeyRot"]
    },
        {
        name: "Zhirna Tvar",
        evidence: ["MonkeyRot", "Pigging", "Peeing"]
    }
 
    
    
   
];

const evidences = document.querySelectorAll(".evidence");
const ghostList = document.getElementById("PossibleGhosts");

// =======================
// Клики по уликам
// =======================

evidences.forEach(evidence => {

    evidence.addEventListener("click", (event) => {

        event.preventDefault();

        let state = Number(evidence.dataset.state);

        state = (state + 1) % 3;

        evidence.dataset.state = state;

        evidence.classList.remove("selected", "excluded");

        if (state === 1) {
            evidence.classList.add("selected");
        } else if (state === 2) {
            evidence.classList.add("excluded");
        }

        updateGhosts();

    });

});

// =======================
// Обновление списка призраков
// =======================

function updateGhosts() {

    const selected = [];
    const excluded = [];

    evidences.forEach(e => {

        const state = Number(e.dataset.state);

        if(state === 1){
            selected.push(e.dataset.id);
        }

        if(state === 2){
            excluded.push(e.dataset.id);
        }

    });

    document.querySelectorAll("#PossibleGhosts li").forEach(li => {

        const ghost = ghosts.find(g => g.name === li.dataset.name);

        const hasSelected = selected.every(ev =>
            ghost.evidence.includes(ev)
        );

        const hasExcluded = excluded.some(ev =>
            ghost.evidence.includes(ev)
        );

        li.classList.remove("ghost-disabled");

        li.style.display = "";

        // Крестик → убрать полностью
        if(hasExcluded){

            li.style.display = "none";

            return;

        }

        // Кружок → сделать серым
        if(!hasSelected){

            li.classList.add("ghost-disabled");

        }

    });

}


console.log(ghosts);
console.log(ghosts.length);
ghosts.forEach(ghost => {

    const li = document.createElement("li");

    li.textContent = ghost.name;

    li.dataset.name = ghost.name;

    ghostList.appendChild(li);

});

updateGhosts();