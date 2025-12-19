import Terminal from './Terminal.js';
import MatrixRain from './MatrixRain.js';
// DO ZAIMPLEMENTOWANIA CONTACT PRZYCISK

class Application {
    constructor(documentRef) {
        this.document = documentRef;
        this.github = this.document.querySelector('#github');
        this.linkedin = this.document.querySelector('#linkedin');
        this.matrixRain = new MatrixRain('matrix-rain');
    }
    init(){
        this.goGithub();
        this.goLinkedin();
        this.matrixRain.start();
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


