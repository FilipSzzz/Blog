import Terminal from './Terminal.js';
import MatrixRain from './MatrixRain.js';
import Clock from "./Clock.js";
import CryptoAPI from "./CryptoAPI.js";
import Slider from "./Slider.js";
import PasswordGenerator from "./PasswordGenerator.js";
import PasswordChecker from "./PasswordChecker.js";
class Application {
    constructor(documentRef) {
        this.document = documentRef;
        this.clock = new Clock();
        this.github = this.document.querySelector('#github');
        this.linkedin = this.document.querySelector('#linkedin');
        this.terminal = null;
        this.matrixRain = new MatrixRain('matrix-rain');
        this.crypto = new CryptoAPI();
        this.passwordLengthSlider = new Slider();
        this.passwordChecker = new PasswordChecker();
    }
    async init(){
        this.goGithub();
        this.goLinkedin();
        this.matrixRain.start();
        this.terminal = new Terminal('#terminalInput', '#output',this.crypto);
        this.clock.showTime();
        this.setupPasswordGenerator();
        this.setupPasswordChecker();
        setInterval(() => this.clock.showTime(), 1000);

    }

    setupPasswordGenerator() {
        const generateButton = this.document.querySelector('#random_password');
        const passwordOutput = this.document.querySelector('#password_generator_output');
        const lengthSlider = this.document.querySelector('#slider');
        const copyPassword = this.document.querySelector('#copy_password');
        generateButton.addEventListener('click', () => {
            const passwordLength = lengthSlider.value;
            const generator = new PasswordGenerator(passwordLength);
            passwordOutput.value = generator.generatePassword();
        });
        copyPassword.addEventListener('click' ,() => {
            if(passwordOutput.value){
                navigator.clipboard.writeText(passwordOutput.value).then(r =>
                    copyPassword.textContent = "Copied!",
                    setTimeout(() => {
                    copyPassword.textContent = 'Copy';
                    }, 1000)
                );

            }
        });

    }
    setupPasswordChecker(){
        const passwordCheckerInput = this.document.querySelector('#password_input');
        passwordCheckerInput.addEventListener('input', () => {
            this.passwordChecker.checkPasswordStrength();
        })
    }

    goGithub(){
        this.github.addEventListener('click', () =>
            window.open('https://github.com/FilipSzzz', '_blank')

        );
    }
    goLinkedin() {
        this.linkedin.addEventListener('click', () =>
            window.open('https://www.linkedin.com/in/filip-szlagowski-41a5b2319/', '_blank')
        );
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const app = new Application(document);
    app.init();

});


