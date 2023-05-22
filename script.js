function generatePasswords() {
    var countInput = document.getElementById("password-count");
    var count = parseInt(countInput.value);

    var lengthInput = document.getElementById("password-length");
    var length = parseInt(lengthInput.value);

    var characterSets = document.getElementsByName("character-set");
    var characterList = "";
    var includesDigits = false;
    var includesLetters = false;
    var includesSpecialCharacters = false;

    for (var i = 0; i < characterSets.length; i++) {
        if (characterSets[i].checked) {
            var characterSet = characterSets[i].value;

            if (characterSet === "digits") {
                characterList += "0123456789";
                includesDigits = true;
            } else if (characterSet === "letters") {
                characterList += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                includesLetters = true;
            } else if (characterSet === "special-characters") {
                characterList += "!@#$%&*";
                includesSpecialCharacters = true;
            }
        }
    }

    var generatedPasswords = document.getElementById("generated-passwords");
    generatedPasswords.innerHTML = ""; 

    for (var j = 0; j < count; j++) {
        var password = "";
        var hasDigit = false;
        var hasLowerCase = false;
        var hasUpperCase = false;
        var hasSpecialChar = false;

        while (password.length < length) {
            var randomIndex = Math.floor(Math.random() * characterList.length);
            var randomChar = characterList.charAt(randomIndex);

            // Check if character type requirements are met
            if (includesDigits && !hasDigit && /[0-9]/.test(randomChar)) {
                hasDigit = true;
            } else if (includesLetters && !hasLowerCase && /[a-z]/.test(randomChar)) {
                hasLowerCase = true;
            } else if (includesLetters && !hasUpperCase && /[A-Z]/.test(randomChar)) {
                hasUpperCase = true;
            } else if (includesSpecialCharacters && !hasSpecialChar && /[^a-zA-Z0-9]/.test(randomChar)) {
                hasSpecialChar = true;
            }

            password += randomChar;
        }

        // Check if all character type requirements are met
        if (includesDigits && includesLetters && includesSpecialCharacters &&
            hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar) {
            var passwordElement = document.createElement("p");
            passwordElement.textContent = password;
            generatedPasswords.appendChild(passwordElement);
        } else {
            j--; 
        }
    }
}
