let string = "";
let smButtons = document.querySelectorAll("#btn");

Array.from(smButtons).forEach((smButtons) => { // Added an opening parenthesis after forEach
   smButtons.addEventListener('click', (e) => { // Fixed the typo in "addEventListener" and used "button" instead of "Button"
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string / 100
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'x^2') { // Handle x^2 (square)
            const num = parseFloat(string);
            if (!isNaN(num)) {
                string = Math.pow(num, 2).toString();
                document.querySelector('input').value = string;
            }
        }
        else if (e.target.innerHTML == '√x') { // Handle √x (square root)
            const num = parseFloat(string);
            if (!isNaN(num) && num >= 0) {
                string = Math.sqrt(num).toString();
                document.querySelector('input').value = string;
            } 
            else {
                string = "Error";
                document.querySelector('input').value = string;
            }
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
