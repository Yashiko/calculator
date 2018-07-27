//paspaudus mygtuka jo reiksme prilyginam a reiksmei, tada spaudziame
// veiksma ir atra reiksme prilyginam b reiksmei ir paspaudus = suskaiciuojame
"use strict";
//Naujas Projekto
//get all keys
let keys = document.querySelectorAll(".buttons-body button");

//loop through all keys
for(let i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        let operators = document.querySelectorAll(".operator");
        let inputDisplay = document.getElementById("calcDisplay");
        let btnValue = this.getAttribute("data-value"); //paspausto mygtuko reiksme
        if (btnValue == "C"){  
            inputDisplay.innerHTML = " ";

        }else if(inputDisplay.innerHTML === ""){
            inputDisplay.innerHTML = btnValue;

        }else if(btnValue===operators){   //jei skaicius yra is dvieju zenklu

            btnValue = inputDisplay.innerHTML += btnValue; // dvizenklis skaicius
            // console.log(btnValue);
        };

        // let operators = document.querySelectorAll(".operator");
        // let operLen = operators.length;
        // for(let y = 0; y < operLen; y++){
        //     operators[y].addEventListener("click",function() {
        //         let op = this.value; //paspausto mygtuko reiksme
        //         if(inputDisplay.innerHTML === "") {
            
        //             inputDisplay.innerHTML = inputDisplay.innerHTML.concat("");
                    
        //         }else if(btnValue) {
        //             inputDisplay.innerHTML = btnValue.concat(op);
                    
        //         }
                   
        //     })
        // }


    }

}

// switch(btnValue){
//     case '*':
//         let result = btnValue*btnValue;
//         inputDisplay.innerHTML = result;
//         break;
//     case '/':
//         let result1 = 4/2;
//         inputDisplay.innerHTML = result1;
//         break;
// }