let input = document.getElementById("input-box");

let str = "";

let buttons = document.querySelectorAll("button");

let arr = Array.from(buttons);
let dotCount = 0;

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

        }

        else if (e.target.innerText == 'AC') {
            str = "";
            input.value = str;
        }

        else if (e.target.innerText == 'DEL') {
            let remainString = str.substring(0, str.length - 1);
            input.value = remainString;
            str = remainString;
        }

        else if (e.target.innerText == '%' || e.target.innerText == '/' || e.target.innerText == '*' || e.target.innerText == '-' || e.target.innerText == '+') {
            let check = str[str.length - 1];

            if (check != '%' && check != '/' && check != '*' && check != '-' && check != '+') {
                str += e.target.innerText;
                input.value = str;
            }
        }

        else {
            if (e.target.innerText == '.') {
                dotCount++;
            }
            str += e.target.innerText;
            input.value = str;
        }

    })
})