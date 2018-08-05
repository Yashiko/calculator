
"use strict";


        let inputDisplay = document.getElementById("calcDisplay");
        
        function pushBtn(obj){
            let push = obj.innerHTML;

            if (push == "="){
                //calculate
                inputDisplay.innerHTML = eval(inputDisplay.innerHTML);
            }else if(push == "C"){
                //All clear
                inputDisplay.innerHTML = '0';
                inputDisplay.innerHTML = push;
            } else {
                inputDisplay.innerHTML += push
            }
        }
