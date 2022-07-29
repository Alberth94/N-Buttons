function nrButtons() {
    return document.getElementById("buttons").value;
}

function createButtons () {
    let numberOfButtons = nrButtons();
    let randomNumber = Math.floor((Math.random() * numberOfButtons) + 1);
    for (let i = 1; i <= numberOfButtons; ++i) {
        let btn = document.createElement('button');
        btn.innerHTML = 'button ' + i;
        document.body.appendChild(btn);
        btn.onclick = function () {
            if (randomNumber == i) {
                alert ("Its me, you won!");
            } else {
                alert ("Try again!");
            }
        }
    }
}
