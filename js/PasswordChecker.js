export default class PasswordChecker {
    constructor() {
        this.passwordInput = document.getElementById('password_input');
        this.lengthRequirement = document.getElementById('length');
        this.numberRequirement = document.getElementById('number');
        this.specialRequirement = document.getElementById('special');
        this.uppercaseRequirement = document.getElementById('uppercase');
    }

    checkPasswordStrength() {
        const password = this.passwordInput.value;
        if (password.length >= 13) {
            this.lengthRequirement.classList.add('valid');
        } else {
            this.lengthRequirement.classList.remove('valid');
        }
        let numberOfNumbers = 0;
        let numberOfSpecialChars = 0;
        let numberOfUppercaseLetters = 0;

        const numbersChars = "0123456789";
        const specialCharsString = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < password.length; i++) {
            const character = password[i];

            if (numbersChars.includes(character)) {
                numberOfNumbers++;
            } else if (specialCharsString.includes(character)) {
                numberOfSpecialChars++;
            } else if (uppercaseChars.includes(character)) {
                numberOfUppercaseLetters++;
            }
        }
        if (numberOfNumbers >= 3) {
            this.numberRequirement.classList.add('valid');
        } else {
            this.numberRequirement.classList.remove('valid');
        }

        if (numberOfSpecialChars >= 2) {
            this.specialRequirement.classList.add('valid');
        } else {
            this.specialRequirement.classList.remove('valid');
        }
        if (numberOfUppercaseLetters >= 2) {
            this.uppercaseRequirement.classList.add('valid');
        } else {
            this.uppercaseRequirement.classList.remove('valid');
        }
    }
}