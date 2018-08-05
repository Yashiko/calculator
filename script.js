
"use strict";

//read display content
let inputDisplay = document.getElementById("calcDisplay");

function pushBtn(obj) {
    let value = obj.innerHTML;
    if (value == "=") {
        //calculate values
        let result = eval(inputDisplay.innerHTML);
        // display values length
        if (result.toString().length > 10) {
            //show result only 10 simbols after the dot
            inputDisplay.innerHTML = result.toFixed(10);
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
