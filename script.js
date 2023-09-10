let input = document.getElementById("input-box");
let topInput = document.getElementById("top-input-box");
let bottom = document.getElementById("bottom-input-box");

let str = "";

let buttons = document.querySelectorAll("button");

let arr = Array.from(buttons);
let dotCount = 0;

let startResult = false;

arr.forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.innerText == '=') {
            if (dotCount > 0) {
                let ans = eval(str);
                input.value = ans.toFixed(2);

                dotCount = 0;
            }
            else {
                let ans = eval(str);
                input.value = ans;

            }
            startResult = false;
            bottom.value = "";
            topInput.value = str;
        }

        else if (e.target.innerText == 'AC') {
            str = "";
            input.value = str;
            topInput.value = "";
            bottom.value = str;
            startResult = false;
        }

        else if (e.target.innerText == 'DEL') {
            let remainString = str.substring(0, str.length - 1);
            input.value = remainString;
            str = remainString;
            topInput.value = "";
        }

        else if (e.target.innerText == '%' || e.target.innerText == '/' || e.target.innerText == '*' || e.target.innerText == '-' || e.target.innerText == '+') {
            let check = str[str.length - 1];

            if (check != '%' && check != '/' && check != '*' && check != '-' && check != '+' && str.length>0) {
                str += e.target.innerText;
                input.value = str;
                startResult = true;
                topInput.value = "";
            }
        }

        else {
            if (e.target.innerText == '.') {
                dotCount++;
            }
            str += e.target.innerText;
            input.value = str;
        }

        if (startResult == true) {

            
            let evaluate = eval(str);
            if (evaluate != undefined) {
                bottom.value = evaluate;
            }

            else {
                bottom.value = "";
            }

        }

    })
})