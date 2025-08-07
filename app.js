let b1 = document.querySelector ("#box1");
let btns = document.querySelectorAll ("button");

for (btn of btns){
    btn.addEventListener ("click", () => {
        console.log ("button was clicked");
    })
}

b1.addEventListener ("click", () => {
    console.log ("btn was clicked");
})