export default class MatrixRain {
    constructor(canvas = 'matrix-rain') {
        this.canvas = document.querySelector(`#${canvas}`);
        this.font = 14;

        this.ctx = this.canvas.getContext('2d');
        this.letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピ' +
            'ウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾド' +
            'ボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    rainDrops = [];
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.colums = Math.floor(this.canvas.width / this.font);

        this.rainDrops = [];
        for (let i = 0; i < this.colums; i++) {
            this.rainDrops[i] = 1;
        }
    }

    draw = () => {
        const context = this.ctx;
        const canvas = this.canvas;

        context.fillStyle = 'rgba(0, 0, 0, 0.1)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0f0';
        context.font = `${this.font}px monospace`;

        for (let i = 0; i < this.rainDrops.length; i++) {
            const text = this.letters.charAt(Math.floor(Math.random() * this.letters.length));
            context.fillText(text, i * this.font, this.rainDrops[i] * this.font);

            if (this.rainDrops[i] * this.font > canvas.height && Math.random() > 0.975) {
                this.rainDrops[i] = 0;
            }
            this.rainDrops[i]++;
        }
    }

    start(){
        if (this.interval) return;
        this.interval = setInterval(this.draw, 33);
    }
}