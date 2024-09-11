console.log("hello")
const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");
const heading=document.querySelector("h1");

function Generate() {
   
    const random = Math.floor(Math.random() * 6);
    heading.innerHTML=random;
    // dice.appendChild(heading)
    if (random >= 1 && random <= 6) {
        rollDice(random);


    }
    else {
        Generate();
    }
}
function rollDice(random) {
    dice.style.animation = 'rolling 4s';
    setTimeout(() => {
        switch (random) {

            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default: break;


        }
        dice.style.animation = 'none';




    }, 4000)


}