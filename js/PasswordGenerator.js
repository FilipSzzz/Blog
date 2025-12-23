export default class PasswordGenerator {
    constructor(lengthOfPassword) {
        this.lengthOfPassword = lengthOfPassword;
    }

    generatePassword() {
        let password = '';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_+=-';
        const letters = 'ABCDEFGHIJKLMNOPRSTUWYZ';

        for (let i = 0; i < this.lengthOfPassword; i++) {
            const typeSelector = Math.floor(Math.random() * 3);

            switch (typeSelector) {
                case 0:
                    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    break;
                case 1:
                    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
                    break;
                case 2:
                    password += letters.charAt(Math.floor(Math.random() * letters.length));
                    break;
            }
        }
        return password;
    }
    copyPasswordToClipboard(){
        const copyText = document.getElementById("copy_password");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    }
}