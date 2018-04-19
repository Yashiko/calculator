//paspaudus mygtuka jo reiksme prilyginam a reiksmei, tada spaudziame
// veiksma ir atra reiksme prilyginam b reiksmei ir paspaudus = suskaiciuojame
"use strict";

//get all keys
let keys = document.querySelectorAll(".buttons-body button");
// var operators = ['+', '-', '*', '/'];

//loop through all keys
for(let i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        let inputDisplay = document.getElementById("calcDisplay");
        let btnValue = this.getAttribute("data-value"); //paspausto mygtuko reiksme
        
        if (btnValue == "C"){  
            inputDisplay.innerHTML = " ";
        }else if(inputDisplay.innerHTML === ""){
            inputDisplay.innerHTML = btnValue;
        } else if(inputDisplay.innerHTML = btnValue){
            inputDisplay.innerHTML += btnValue;

        }

        switch(btnValue){
            case '*':
                let result = 2*2;
                inputDisplay.innerHTML = result;
                break;
            case '/':
                let result1 = 4/2;
                inputDisplay.innerHTML = result1;
                break;

        }
    }
}