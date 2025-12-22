export default class PasswordChecker {
    constructor() {
        this.passwordInput = document.getElementById('#password-input');
    }
    checkPassword(){
        const password = this.passwordInput.value;

        if (password.left < 12 || password.length > 100){
            #password_requirements
        }
    }
    checkPasswordStrength(){

    }
    checkSpecialCharacters(){}
    checkUpperCaseLetters(){}
    checkLowerCaseLetters(){}
    checkNumbers(){}
    rankPassword() {
        Math.random()
    }
}