//paspaudus mygtuka jo reiksme prilyginam a reiksmei, tada spaudziame
// veiksma ir atra reiksme prilyginam b reiksmei ir paspaudus = suskaiciuojame
"use strict";
//Naujas Projekto
//get all keys
let keys = document.querySelectorAll(".buttons-body button");
// let operators = document.querySelectorAll(".operator");
 
//loop through all keys
for(let i = 0; i < keys.length; i++){

    keys[i].onclick = function(e){
        let inputDisplay = document.getElementById("calcDisplay");
        let btnValue = this.getAttribute("data-value"); //paspausto mygtuko reiksme
        let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme

        if (btnValue == "C"){  
            inputDisplay.innerHTML = " ";

        }else if(inputDisplay.innerHTML === ""){
            inputDisplay.innerHTML = btnValue;
            let num1 = btnValue;

        }else if(operatorValue){   //jei skaicius yra is dvieju zenklu
            // btnValue = inputDisplay.innerHTML += btnValue; // dvizenklis skaicius
            inputDisplay.innerHTML = btnValue + btnValue;

        };


    
        // for(let y = 0; y < operators.length; y++){
        //     operators[y].addEventListener("click",function() {
        //         if(inputDisplay.innerHTML === "") {
            
        //             inputDisplay.innerHTML = btnValue+btnValue;
                    
        //         }else if(btnValue) {
        //             inputDisplay.innerHTML = btnValue;
                    
        //         }
                   
        //     })
        // }


    }

}

function add(){

}