
"use strict";

let keys = document.querySelectorAll(".buttons-body button");
// let operators = document.querySelectorAll(".buttons-body .operator");

//loop through all keys
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        let num1;
        let num2;
        let ats;
        let inputDisplay = document.getElementById("calcDisplay");
        let inputValue = inputDisplay;

        inputDisplay.innerHTML += this.value;
        num1 = inputValue.innerHTML;
        if (this.value == "+") {
            num2 = inputValue.innerHTML; //paspausto mygtuko reiksme
            ats = Number(num1) + Number(num2);
        } else if (this.value == "*") {
            num2 = this.getAttribute("value"); //paspausto mygtuko reiksme
            ats = Number(num1) * Number(num2);
        } else if (this.value == "/") {
            num2 = this.getAttribute("value"); //paspausto mygtuko reiksme
            ats = Number(num1) / Number(num2);
        } else if (this.value == "-") {
            num2 = this.getAttribute("value"); //paspausto mygtuko reiksme
            ats = Number(num1) - Number(num2);
        }
        // console.log(this.value);
        // if (this.value == "C"){  
        //     inputDisplay.innerHTML = " "; 
        //     let decimalAdded = false;
        // }else if(this.value == "+"){
        //     let ats = Number(num1) + Number(num2);
        // }

        if (this.value == "=") {
            inputDisplay.innerHTML = ats; // 'this' is the button that gets clicked. We add its value to the input field
        }


    }
}

            // let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme
        // let btnValue2 = this.getAttribute("data-value");

        // for(let y = 0; y < operators.length; y++){
    //     let operatorValue = this.getAttribute("value"); //oeratoriaus reiksme
    //     operators[y].addEventListener("click",function() {
    //         if(operatorValue) {

    //             inputDisplay.innerHTML = operatorValue;

    //         }else {
    //             inputDisplay.innerHTML =" btnValue";

    //         }

    //     });f