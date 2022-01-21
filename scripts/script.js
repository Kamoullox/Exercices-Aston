let body = document.querySelector("body");
let cardContainer = document.createElement("div");

cardContainer.className = "card__container";
body.append(cardContainer);

let content = [
    {
        title: "Friendship is Magic",
        description: "Liste les noms des principaux personnages de la série Friendship is magic, sous forme de liste non ordonnée. ",
        url: "./exercice1/exercice1.html"
    },
    {
        title: "L'Horloge",
        description: "Une page qui affichera l'heure actuelle sous forme : hh:mm:s au centre de la page. ",
        url: "./exercice2/exercice2.html"
    },
    {
        title: "FizzBuzz",
        description: "Exercice FizzBuzz, le classico",
        url: "./exercice3/exercice3.html"
    },
    {
        title: "FizzBuzz ++",
        description: "Exercice du FizzBuzz avec une interaction utilisateur",
        url: "./exercice4/exercice4.html"
    },
]

/**
 * fill the cardContainer with all information in the contente list
 */
function fillCardContainer() {
    content.forEach(element => {
        cardContainer.innerHTML += `
        <div class="card">
            <div class="card__content">  
                <h3 class="card__header">${element.title}</h3>  
                <p class="card__info">${element.description}</p>  
                <a href="${element.url}"><button class="card__button"> Voir l'exercice</button></a>
            </div>
        </div>`;
    });
}

fillCardContainer()