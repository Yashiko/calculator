//paspaudus mygtuka jo reiksme prilyginam a reiksmei, tada spaudziame
// veiksma ir atra reiksme prilyginam b reiksmei ir paspaudus = suskaiciuojame
"use strict";
//Naujas Projekto
//get all keys
let keys = document.querySelectorAll(".buttons-body button");
// let operators = document.querySelectorAll(".buttons-body .operator");
 
//loop through all keys
for(let i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        let inputDisplay = document.getElementById("calcDisplay");
        let btnValue = this.getAttribute("data-value"); //paspausto mygtuko reiksme
        let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme
        // let btnValue2 = this.getAttribute("data-value");

        inputDisplay.innerHTML = btnValue;
        console.log(btnValue);

        if (btnValue == "C"){  
            inputDisplay.innerHTML = " "; 

        }else if( btnValue == "+"){
               console.log(operatorValue);
            
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