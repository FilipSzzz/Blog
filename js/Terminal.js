export default class Terminal {
    constructor(input, output, api) {
        this.input = document.querySelector(input);
        this.output = document.querySelector(output);
        this.api = api;
        if (this.input) {
            this.input.addEventListener('keydown', (e) => this.handleInput(e));
        }
        this.printInitialMessage();
    }

    handleInput(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = this.input.value.trim();
            this.output.innerHTML += `<span style="color: #777674;">fszlagowski@terminal: </span>${command}<br>`;
            this.handleCommand(command);
            this.input.value = '';
            this.output.parentElement.scrollTop = this.output.parentElement.scrollHeight;
        }
    }
    handleCommand(command) {
        const trimmedCommand = command.trim();
        if (trimmedCommand === '') return;

        const parts = trimmedCommand.split(/\s+/);
        const mainCommand = parts[0].toLowerCase();
        const flags = parts[1] ? parts[1].toUpperCase() : null;

        if (mainCommand === 'clear') {
            this.output.innerHTML = '';
        }else if (mainCommand === 'linkedin'){
            this.output.innerHTML += '<a href="https://www.linkedin.com/in/filip-szlagowski-41a5b2319/" target="_blank" class="terminal_link">https://www.linkedin.com/in/filip-szlagowski-41a5b2319/</a> <br>'
        }else if (mainCommand === 'about'){
            this.output.innerHTML += 'Jestem studentem informatyki na PJATK, pasjonuję się cyberbezpieczeństwem oraz Formułą 1.' +
                '<br>W wolnych chwilach lubię rozwiązywać CTFy oraz pisać w pythonie i javie.<br>';
        }
        else if (mainCommand === 'skills'){
            this.output.innerHTML += 'Java + Spring Boot, Python, MongoDB, MySQL, Git <br>'
        }
        else if (mainCommand === 'github'){
            this.output.innerHTML += '<a href="https://github.com/FilipSzzz" target="_blank" class="terminal_link">https://github.com/FilipSzzz</a> <br>'
        }
        else if (mainCommand === 'contact'){
            this.output.innerHTML += '<a href="https://www.linkedin.com/in/filip-szlagowski-41a5b2319/" target="_blank" class="terminal_link">https://www.linkedin.com/in/filip-szlagowski-41a5b2319/</a> </br>'
        } else if (mainCommand === 'help') {
            this.output.innerHTML += 'Dostępne komendy: clear, help, ls, crypto<br>';
        } else if (mainCommand === 'ls') {
            this.output.innerHTML += 'github linkedin offer contact<br>';
        } else if (mainCommand === "crypto") {
            const availableMap = this.api.checkingIfCryptoExists();
            if (flags === null) {
                this.output.innerHTML += 'WPISZ: crypto [nazwa krypto] aby sprawdzić cenę.<br>';
            } else {
                if (flags in availableMap) {
                    this.output.innerHTML += `Pobieranie danych dla ${availableMap[flags]}...<br>`;
                    api.getCrypto(flags).then(data => {
                        const response =  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);

                    })
                } else {
                    this.output.innerHTML += `Nieobsługiwana kryptowaluta: ${flags}<br>`;
                }
            }
        } else {
            this.output.innerHTML += `Nieznana komenda: ${mainCommand}<br>`;
        }
    }
    printInitialMessage(){
        this.printASCII();
        this.output.innerHTML += 'Witaj na mojej stronie!<br>';
        this.output.innerHTML += 'Jestem studentem informatyki na PJATK<br>';
        this.output.innerHTML += 'Pasjonuję się cyberbezpieczeństwem oraz Formułą 1.<br>'
        this.output.innerHTML += 'W wolnych chwilach lubię rozwiązywać CTFy oraz pisać w pythonie i javie.<br>'


    }
    printASCII() {
        this.output.innerHTML += `
        <pre style="color: #28c940; font-size: 10px; line-height: 10px;">
$$$$$$$$\\ $$$$$$\\ $$\\       $$$$$$\\ $$$$$$$\\         $$$$$$\\  $$$$$$$$\\ $$\\        $$$$$$\\   $$$$$$\\   $$$$$$\\  $$\\      $$\\  $$$$$$\\  $$\\   $$\\ $$$$$$\\ 
$$  _____|\\_$$  _|$$ |      \\_$$  _|$$  __$$\\       $$  __$$\\ \\____$$  |$$ |      $$  __$$\\ $$  __$$\\ $$  __$$\\ $$ | $\\  $$ |$$  __$$\\ $$ | $$  |\\_$$  _|
$$ |        $$ |  $$ |        $$ |  $$ |  $$ |      $$ /  \\__|    $$  / $$ |      $$ /  $$ |$$ /  \\__|$$ /  $$ |$$ |$$$\\ $$ |$$ /  \\__|$$ |$$  /   $$ |  
$$$$$\\      $$ |  $$ |        $$ |  $$$$$$$  |      \\$$$$$$\\     $$  /  $$ |      $$$$$$$$ |$$ |$$$$\\ $$ |  $$ |$$ $$ $$\\$$ |\\$$$$$$\\  $$$$$  /    $$ |  
$$  __|     $$ |  $$ |        $$ |  $$  ____/        \\____$$\\   $$  /   $$ |      $$  __$$ |$$ |\\_$$ |$$ |  $$ |$$$$  _$$$$ | \\____$$\\ $$  $$<     $$ |  
$$ |        $$ |  $$ |        $$ |  $$ |            $$\\   $$ | $$  /    $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$$  / \\$$$ |$$\\   $$ |$$ |\\$$\\    $$ |  
$$ |      $$$$$$\\ $$$$$$$$\\ $$$$$$\\ $$ |            \\$$$$$$  |$$$$$$$$\\ $$$$$$$$\\ $$ |  $$ |\\$$$$$$  | $$$$$$  |$$  /   \\$$ |\\$$$$$$  |$$ | \\$$\\ $$$$$$\\ 
\\__|      \\______|\\________|\\______|\\__|             \\______/ \\________|\\________|\\__|  \\__| \\______/  \\______/ \\__/     \\__| \\______/ \\__|  \\__|\\______|
        </pre><br>`;
    }

}