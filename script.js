
"use strict";

//read display content
let inputDisplay = document.getElementById("calcDisplay");

function pushBtn(obj) {
    let value = obj.innerHTML;
    if (value == "=") {
        
        //calculate values
        let result = eval(inputDisplay.innerHTML);
        let b = result.length;
        console.log(b);
        if (result.length >= 11){
            
            inputDisplay.innerHTML = result.tofixed(11);
        } else {
            inputDisplay.innerHTML = result;
        }
        
    } else if (value == "C") {
        //clear dispay
        inputDisplay.innerHTML = ' ';
    } else {
        //show pressed value into display
        inputDisplay.innerHTML += value
    }
}
