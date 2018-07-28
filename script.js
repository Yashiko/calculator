//paspaudus mygtuka jo reiksme prilyginam a reiksmei, tada spaudziame
// veiksma ir atra reiksme prilyginam b reiksmei ir paspaudus = suskaiciuojame
"use strict";
//Naujas Projekto
//get all keys
let keys = document.querySelectorAll(".buttons-body button");
let operators = document.querySelectorAll(".operator");
 
//loop through all keys
for(let i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        let inputDisplay = document.getElementById("calcDisplay");
        let btnValue = this.getAttribute("data-value"); //paspausto mygtuko reiksme
        let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme

        let decimalAdded = false; //istrintu visus duomenis

        inputDisplay.innerHTML = btnValue;
        console.log(btnValue);
        if (btnValue == "C"){  
            inputDisplay.innerHTML = " "; 
            let decimalAdded = false; //istrintu visus duomenis
        }else if(operatorValue == "+"){
            console.log(operatorValue);
            inputDisplay.innerHTML = btnValue;

        }
    // for(let y = 0; y < operators.length; y++){
    //     let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme
    //     operators[y].addEventListener("click",function() {
    //         if(operatorValue) {
        
    //             inputDisplay.innerHTML = operatorValue;
                
    //         }else {
    //             inputDisplay.innerHTML =" btnValue";
                
    //         }
               
    //     });
    }}