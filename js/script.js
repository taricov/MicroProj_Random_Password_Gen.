function getPassword() {
    var chars = '[A]WXYZ0123#_^\BCDEF456789GHIJK$%&~LMNOPQRSTUV}{'
    var passwordLength = 16;
    var password = '';

    for (var i=0; i<passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * passwordLength);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById('password').value = password
}

function copy() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}