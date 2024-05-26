// Exercise 1

let UserInput = document.getElementById("PalChecker");
let Paline = document.getElementById("Palin")

function isPalindrome() {
let Reverso = UserInput.value.split('').reverse().join('').toLowerCase();


    if (Reverso == UserInput.value ) {

        Paline.innerHTML = "That is a Palindrome! :D"
console.log("That is a B")

    }
    
    else {

    Paline.innerHTML = "That is not a Palindrome :("

    }
    
    console.log(Reverso)


}

