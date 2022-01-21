let listNames = ["Twilight Sparkle", "Applejack", "Fluttershy", "Rarity", "Pinkie Pie", "Rainbow Dash", "Spike"];
let listImages = [
    "https://static.wikia.nocookie.net/mlp/images/1/14/Twilight_heartfelt_happiness_S3E13.png",
    "https://static.wikia.nocookie.net/mlp/images/f/ff/Applejack_%22do_exactly_what_I_say%22_S5E24.png",
    "https://static.wikia.nocookie.net/mlp/images/5/55/Fluttershy_rolling_her_eyes_S2E07.png",
    "https://static.wikia.nocookie.net/mlp/images/5/57/Rarity_%22to_give_it_enough_love%22_S5E14.png",
    "https://static.wikia.nocookie.net/mlp/images/f/fa/Pinkie_Pie_S2E18_thumb.png",
    "https://static.wikia.nocookie.net/mlp/images/c/c4/Rainbow_Dash_S2E7_thumb.png",
    "https://static.wikia.nocookie.net/mlp/images/8/87/Spike_ID_S8E11.png"
];


/**
 * Add cards for caracter of my litle pony on a containerImage element in the html
 * @param { string[] } listNames
 * @param { string[] } listImages
 */
function addCardsMyLitlePony(listNames, listImages){
    let containerImage = document.querySelector(".containerImage");

    for (let i = 0; i < listNames.length; i++){
        let div = document.createElement("div");
        div.className = "card";

        let image = document.createElement("img");
        image.setAttribute("src", listImages[i]);

        let paragraph = document.createElement('p');
        paragraph.textContent = listNames[i];

        div.append(image);
        div.append(paragraph);
        containerImage.append(div)
    }
}

addCardsMyLitlePony(listNames, listImages);

console.log("Hello world !");