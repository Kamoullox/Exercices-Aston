let p = document.createElement("p");
let div = document.createElement('div');
div.className = "container";
document.querySelector('body').append(div);



/**
 * Add date time on body element
 */
function clock() {
    let now = new Date()
    let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let seconds = (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds());

    let time = hours+ ":" + minutes + ":" + seconds;
    p.textContent = time
    div.append(p)
    // document.querySelector('body').append(p);
}

setInterval(clock, 1000);



