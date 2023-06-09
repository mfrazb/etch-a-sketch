// create x number of boxes for etch-a-sketch
function createSquares(num, parent) {
    let counter = 1;

    // create number of divs passed into func
    while (counter <= num) {
        const div = document.createElement("div");
        div.setAttribute("id", `square-${counter}`);
        div.classList.add("screen-section");
        parent.appendChild(div);

        // add mouseover event listener 
        div.addEventListener("mouseover", turnDark);

        //inactive callback that resets square of screen when user mouses off
        // div.addEventListener("mouseout", resetSquare);
        counter++;
    }
}

const screen = document.getElementById("screen-view");
createSquares(1024, screen);

//callback - turns section of screen dark when user mouses over
function turnDark(event) {
    event.target.classList.add("darken");
}

//inactive callback - resets screen section when user mouses off
function resetSquare(event) {
    event.target.classList.remove("darken");
}

//resets screen when user presses reset button
function resetScreen(event) {
    const screenSections = document.querySelectorAll(".screen-section");
    screenSections.forEach(section => {
        section.classList.remove("darken");
    });
}

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", resetScreen);