function generatePasswords() {
    var countInput = document.getElementById("password-count");
    var count = parseInt(countInput.value);

    var lengthInput = document.getElementById("password-length");
    var length = parseInt(lengthInput.value);

    var characterSets = document.getElementsByName("character-set");
    var characterList = "";

    for (var i = 0; i < characterSets.length; i++) {
        if (characterSets[i].checked) {
            var characterSet = characterSets[i].value;

            if (characterSet === "digits")
                characterList += "0123456789";
            else if (characterSet === "letters")
                characterList += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            else if (characterSet === "special-characters")
                characterList += "@#$%!";
        }
    }

    var passwords = [];
    for (var j = 0; j < count; j++) {
        var password = "";
        for (var k = 0; k < length; k++) {
            var randomIndex = Math.floor(Math.random() * characterList.length);
            password += characterList.charAt(randomIndex);
        }
        passwords.push(password);
    }

    var generatedPasswords = document.getElementById("generated-passwords");
    generatedPasswords.innerHTML = "";

    for (var j = 0; j < count; j++) {
        var password = "";
        for (var k = 0; k < length; k++) {
            var randomIndex = Math.floor(Math.random() * characterList.length);
            password += characterList.charAt(randomIndex);
        }

        var passwordElement = document.createElement("p");
        passwordElement.textContent = password;
        generatedPasswords.appendChild(passwordElement);
    }
}