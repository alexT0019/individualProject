//Query Selector
const btn = document.querySelectorAll('.calculatorBtn');
const displayScreen = document.querySelector('.displayScreen');

for(let i = 0; i < btn.length; i++){
    if(displayScreen.innerHtml === 0){
        btn[i].addEventListener("click", () => {
            displayScreen.innerHtml = `${btn[i].value}`;
        });
        /*
    } else {
        btn[i].addEventListener("click", () => {
            displayScreen.innerHtml = "";
            displayScreen.append((btn[i].value));
        });
    }
    */
}}