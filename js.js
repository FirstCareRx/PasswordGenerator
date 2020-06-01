//establish let variables

let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialCase = '!@#$^&%*()+=-[]{}|:<>?,.';
let numberCase = '1234567890';
let pwd = '';
let lowerSelection = false;
let upperSelection = false;
let specialSelection = false;
let numberSelection = false;
//function to generate a random password

function generate() {
    let confirmLength = '';
//User Input Questions
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("How long would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }
//getting user input for which character types to use for the password
    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Would you like to use numerical characters?") == true) {
            numberSelection = true
        }
//if none of the character types are selected, alerts the user to choose at least one
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }
//generate random password
    let characters = '';
    characters += (lowerSelection ? lowerCase : '');
    characters += (upperSelection ? upperCase : '');
    characters += (specialSelection ? specialCase : '');
    characters += (numberSelection ? numberCase : '');

    pwd = password(confirmLength, characters);
    document.getElementById("password").innerHTML = pwd;

}
function password(l, characters) {
    let pwd = '';
    for (let i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
//copy function to the clipboard
function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
}