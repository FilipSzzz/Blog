export default class PasswordChecker {
    constructor() {
        this.passwordInput = document.getElementById('password-input');
    }
    checkPasswordStrength(){
        const password = this.passwordInput.value;
        let score = 0;
        const checks = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        };
        if (password.length === 0) {
            return { score: 0, message: "Password is empty" };
        }
        if (checks.length) score++;
        if (checks.uppercase) score++;
        if (checks.lowercase) score++;
        if (checks.number) score++;
        if (checks.special) score++;
        if (password.length >= 12) score++;
        return { score };
    }
}