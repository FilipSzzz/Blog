const input = document.getElementById('terminalInput');
const output = document.getElementById('output');
const githubButton = document.getElementById('github');
const linkedinButton = document.getElementById('linkedin')
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = input.value.trim();
        output.innerHTML += '<span style="color: #777674;">fszlagowski@terminal: </span>' + command + '<br>';
        handleCommand(command);
        input.value = '';
    }
});
function print(){
    output.innerHTML += '' +
        '$$$$$$$$\\ $$$$$$\\ $$\\       $$$$$$\\ $$$$$$$\\         $$$$$$\\  $$$$$$$$\\ $$\\        $$$$$$\\   $$$$$$\\   $$$$$$\\  $$\\      $$\\  $$$$$$\\  $$\\   $$\\ $$$$$$\\ \n' +
        '$$  _____|\\_$$  _|$$ |      \\_$$  _|$$  __$$\\       $$  __$$\\ \\____$$  |$$ |      $$  __$$\\ $$  __$$\\ $$  __$$\\ $$ | $\\  $$ |$$  __$$\\ $$ | $$  |\\_$$  _|\n' +
        '$$ |        $$ |  $$ |        $$ |  $$ |  $$ |      $$ /  \\__|    $$  / $$ |      $$ /  $$ |$$ /  \\__|$$ /  $$ |$$ |$$$\\ $$ |$$ /  \\__|$$ |$$  /   $$ |  \n' +
        '$$$$$\\      $$ |  $$ |        $$ |  $$$$$$$  |      \\$$$$$$\\     $$  /  $$ |      $$$$$$$$ |$$ |$$$$\\ $$ |  $$ |$$ $$ $$\\$$ |\\$$$$$$\\  $$$$$  /    $$ |  \n' +
        '$$  __|     $$ |  $$ |        $$ |  $$  ____/        \\____$$\\   $$  /   $$ |      $$  __$$ |$$ |\\_$$ |$$ |  $$ |$$$$  _$$$$ | \\____$$\\ $$  $$<     $$ |  \n' +
        '$$ |        $$ |  $$ |        $$ |  $$ |            $$\\   $$ | $$  /    $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$$  / \\$$$ |$$\\   $$ |$$ |\\$$\\    $$ |  \n' +
        '$$ |      $$$$$$\\ $$$$$$$$\\ $$$$$$\\ $$ |            \\$$$$$$  |$$$$$$$$\\ $$$$$$$$\\ $$ |  $$ |\\$$$$$$  | $$$$$$  |$$  /   \\$$ |\\$$$$$$  |$$ | \\$$\\ $$$$$$\\ \n' +
        '\\__|      \\______|\\________|\\______|\\__|             \\______/ \\________|\\________|\\__|  \\__| \\______/  \\______/ \\__/     \\__| \\______/ \\__|  \\__|\\______|\n' +
        '                                                                                                                                                         \n' +
        '                                                                                                                                                         \n' +
        '                                                                                                                                                         <br>';
}
function handleCommand(cmd) {
    if (cmd === 'ls') {
        output.innerHTML += 'github linkedin<br>';
    } else if (cmd === 'clear') {
        output.innerHTML = '';
    } else if (cmd === 'help') {
        output.innerHTML += 'Dostępne komendy: <br>';
    }else if (cmd === 'print') {
        print();
    }
    else if (cmd === 'linkedin') {
        output.innerHTML += 'https://www.linkedin.com/in/filip-szlagowski-41a5b2319/ <br>';
    }else if (cmd === 'github') {
        output.innerHTML += 'https://github.com/FilipSzzz <br>';
    }
    else if (cmd === '') {
    } else {
        output.innerHTML += 'Nieznana komenda: ' + cmd + '<br>';
    }
}
function animatedBackground() {

}
githubButton.addEventListener('click', function (event) {
    event.preventDefault();
    goToGithub();
});
linkedinButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/filip-szlagowski-41a5b2319/", "_blank");
})
function goToGithub(){
    window.open("https://github.com/FilipSzzz", "_blank");
}
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
letters = letters.split('');
var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}
setInterval(draw, 33);
