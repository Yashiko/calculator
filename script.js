//paspaudus mygtuka jo reiksme prilyginam a reiksmei, tada spaudziame
// veiksma ir atra reiksme prilyginam b reiksmei ir paspaudus = suskaiciuojame
"use strict"


main();
function main() {
    document.getElementById("buttons").onclick = numbers;
}
function numbers(a, b, op) {
    let num1 = a.target.id;
    let num2 = b.target.id;

    if (a.target.tagName == 'BUTTON') {
        document.getElementById("calcDisplay").innerHTML = num1;
    }else if (b.target.tagName == 'BUTTON') {
        document.getElementById("calcDisplay").innerHTML = num2;
    };
}
