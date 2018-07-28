
"use strict";

let keys = document.querySelectorAll(".buttons-body button");
// let operators = document.querySelectorAll(".buttons-body .operator");
 
//loop through all keys
for(let i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        // let num1 = 0;
        let inputDisplay = document.getElementById("calcDisplay");
        let inputValue = inputDisplay.innerHTML;
        // let btnValue = this.getAttribute("data-value"); //paspausto mygtuko reiksme
        // let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme
        // let btnValue2 = this.getAttribute("data-value");
        inputDisplay.innerHTML += this.value;
        let num1 = 

        console.log(this.value);
        if (this.value == "C"){  
            inputDisplay.innerHTML = " "; 
            let decimalAdded = false;
        }else if(this.value == "="){
            inputDisplay.innerHTML = "result"; // 'this' is the button that gets clicked. We add its value to the input field
        }


    }}


        // for(let y = 0; y < operators.length; y++){
    //     let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme
    //     operators[y].addEventListener("click",function() {
    //         if(operatorValue) {
        
    //             inputDisplay.innerHTML = operatorValue;
                
    //         }else {
    //             inputDisplay.innerHTML =" btnValue";
                
    //         }
               
    //     });