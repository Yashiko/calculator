//paspaudus mygtuka jo reiksme prilyginam a reiksmei, tada spaudziame
// veiksma ir atra reiksme prilyginam b reiksmei ir paspaudus = suskaiciuojame
"use strict";

//get all keys
let keys = document.querySelectorAll(".buttons-body button");
for(let i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        let btnValue = this.getAttribute("data-value"); //paspausto mygtuko reiksme
        
        let input = document.getElementById("calcDisplay");

        if (btnValue == "C"){
            input.innerHTML = "";
        }else{
            input.innerHTML = btnValue;
        }

    }

}