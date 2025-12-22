import Terminal from './Terminal.js';
import MatrixRain from './MatrixRain.js';
import Clock from "./Clock.js";
import CryptoAPI from "./CryptoAPI.js";
import Slider from "./Slider.js"; // Import Slider

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
    }
    async init(){
        this.goGithub();
        this.goLinkedin();
        this.matrixRain.start();
        this.terminal = new Terminal('#terminalInput', '#output',this.crypto);
        this.clock.showTime();
        setInterval(() => this.clock.showTime(), 1000);

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


