
"use strict";

//read display content
let inputDisplay = document.getElementById("calcDisplay");

function pushBtn(obj) {
    let value = obj.innerHTML;
    if (value == "=") {
        
        //calculate values
        let result = eval(inputDisplay.innerHTML);
        let n = result.length
        if( n > 7){
           inputDisplay.innerHTML = result.toFixed(8);
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
