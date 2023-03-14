const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const messageElement = document.getElementById("message")

const priceToFind = Math.floor(Math.random()*100)+1

console.log("Prix à trouver : ", priceToFind)

checkButton.addEventListener("click",()=>{
    let guessedNumber = parseInt(guessInput.value);
    //let guessedNumber = +guessInput.value;
    if(guessedNumber === priceToFind){
        messageElement.innerText = "Vous avez trouvé !"
    } else if(guessedNumber > priceToFind){
        messageElement.innerText = "Trop haut !"
    }
    else {
        messageElement.innerText = "Trop bas !"
    }
})