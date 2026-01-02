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
            this.output.innerHTML += `<span style="color: #777674;">fszlagowski@terminal: </span> ${command}<br>`;
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
            this.output.innerHTML += 'Student informatyki na PJATK<br>';
            this.output.innerHTML += 'Pasjonuję się cyberbezpieczeństwem, programowaniem oraz Formułą 1.<br>'
            this.output.innerHTML += 'W wolnych chwilach lubię rozwiązywać CTFy.<br>'
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
            this.output.innerHTML += `
                <div style="margin: 10px 0;">
                    <span style="color: #28c940; font-weight: bold;">Dostępne komendy:</span><br>
                    <div style="display: grid; grid-template-columns: 100px auto; margin-top: 5px;">
                        <span>about</span>    <span>- informacje o autorze</span>
                        <span>skills</span>   <span>- lista technologii i umiejętności</span>
                        <span>github</span>   <span>- link do profilu GitHub</span>
                        <span>linkedin</span> <span>- link do profilu LinkedIn</span>
                        <span>contact</span>  <span>- informacje kontaktowe</span>
                        <span>ls</span>       <span>- listuje dostępne sekcje</span>
                        <span>crypto</span>   <span>- sprawdza kursy (np. crypto BTC)</span>
                        <span>clear</span>    <span>- czyści ekran terminala</span><br>
                    </div>
                </div>`;
        } else if (mainCommand === 'ls') {
            this.output.innerHTML += 'github linkedin contact<br>';
        } else if (mainCommand === "crypto") {
            const availableCrypto = this.api.checkingIfCryptoExists();
            if (flags === null) {
                this.output.innerHTML += 'WPISZ: crypto [symbol] (np. crypto BTC) aby sprawdzić cenę.<br>';
            } else {
                if (flags in availableCrypto) {
                    const cryptoId = availableCrypto[flags];
                    this.output.innerHTML += `Pobieranie danych dla ${flags}...<br>`;
                    
                    this.api.getCrypto(cryptoId).then(data => {
                        if (data && data[cryptoId]) {
                            const price = data[cryptoId].usd;
                            this.output.innerHTML += `<span style="color: #28c940;">Aktualna cena ${flags}: $${price}</span><br>`;
                        } else {
                            this.output.innerHTML += 'Nie udało się pobrać ceny.<br>';
                        }
                        this.output.parentElement.scrollTop = this.output.parentElement.scrollHeight;
                    });
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
        this.output.innerHTML += 'Pasjonuję się cyberbezpieczeństwem, programowaniem oraz Formułą 1.<br>'
        this.output.innerHTML += 'W wolnych chwilach lubię rozwiązywać CTFy.<br>'
        this.output.innerHTML += '<br><span style="color: #7100ff;">Wpisz komendę help by poznać wszystkie dostepne komendy</span><br>';


    }
    printASCII() {
        const isMobile = window.innerWidth <= 770;
        let asciiContent = '';
        if (isMobile) {
            asciiContent = `
$$$$$$$$$$\\ $$$$$$\\ $$\\       $$$$$$\\ $$$$$$$\\ 
$$  _____|\\_$$  _|$$ |      \\_$$  _|$$  __$$\\
$$ |        $$ |  $$ |        $$ |  $$ |  $$ |
$$$$$\\      $$ |  $$ |        $$ |  $$$$$$$  |
$$  __|     $$ |  $$ |        $$ |  $$  ____/ 
$$ |        $$ |  $$ |        $$ |  $$ |      
$$ |      $$$$$$\\ $$$$$$$$\\ $$$$$$\\ $$ |      
\\__|      \\______|\\________|\\______|\\__|      

$$$$$$\\  $$$$$$$$\\ $$\\        $$$$$$\\   $$$$$$\\   $$$$$$\\  $$\\      $$\\  $$$$$$\\  $$\\   $$\\ $$$$$$\\ 
$$  __$$\\ \\____$$  |$$ |      $$  __$$\\ $$  __$$\\ $$  __$$\\ $$ | $\\  $$ |$$  __$$\\ $$ | $$  |\\_$$  _|
$$ /  \\__|    $$  / $$ |      $$ /  $$ |$$ /  \\__|$$ /  $$ |$$ |$$$\\ $$ |$$ /  \\__|$$ |$$  /   $$ |  
\\$$$$$$\\     $$  /  $$ |      $$$$$$$$ |$$ |$$$$\\ $$ |  $$ |$$ $$ $$\\$$ |\\$$$$$$\\  $$$$$  /    $$ |  
 \\____$$\\   $$  /   $$ |      $$  __$$ |$$ |\\_$$ |$$ |  $$ |$$$$  _$$$$ | \\____$$\\ $$  $$<     $$ |  
$$\\   $$ | $$  /    $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$$  / \\$$$ |$$\\   $$ |$$ |\\$$\\    $$ |  
\\$$$$$$  |$$$$$$$$\\ $$$$$$$$\\ $$ |  \\__| \\$$$$$$  | $$$$$$  |$$  /   \\$$ |\\$$$$$$  |$$ | \\$$\\ $$$$$$\\ 
 \\______/ \\________|\\________|\\__|       \\______/   \\______/ \\__/     \\__| \\______/ \\__|  \\__|\\______|`.trim();
        } else {
            asciiContent = `
$$$$$$$$\\ $$$$$$\\ $$\\       $$$$$$\\ $$$$$$$\\         $$$$$$\\  $$$$$$$$\\ $$\\        $$$$$$\\   $$$$$$\\   $$$$$$\\  $$\\      $$\\  $$$$$$\\  $$\\   $$\\ $$$$$$\\ 
$$  _____|\\_$$  _|$$ |      \\_$$  _|$$  __$$\\       $$  __$$\\ \\____$$  |$$ |      $$  __$$\\ $$  __$$\\ $$  __$$\\ $$ | $\\  $$ |$$  __$$\\ $$ | $$  |\\_$$  _|
$$ |        $$ |  $$ |        $$ |  $$ |  $$ |      $$ /  \\__|    $$  / $$ |      $$ /  $$ |$$ /  \\__|$$ /  $$ |$$ |$$$\\ $$ |$$ /  \\__|$$ |$$  /   $$ |  
$$$$$\\      $$ |  $$ |        $$ |  $$$$$$$  |      \\$$$$$$\\     $$  /  $$ |      $$$$$$$$ |$$ |$$$$\\ $$ |  $$ |$$ $$ $$\\$$ |\\$$$$$$\\  $$$$$  /    $$ |  
$$  __|     $$ |  $$ |        $$ |  $$  ____/        \\____$$\\   $$  /   $$ |      $$  __$$ |$$ |\\_$$ |$$ |  $$ |$$$$  _$$$$ | \\____$$\\ $$  $$<     $$ |  
$$ |        $$ |  $$ |        $$ |  $$ |            $$\\   $$ | $$  /    $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$$  / \\$$$ |$$\\   $$ |$$ |\\$$\\    $$ |  
$$ |      $$$$$$\\ $$$$$$$$\\ $$$$$$\\ $$ |            \\$$$$$$  |$$$$$$$$\\ $$$$$$$$\\ $$ |  \\__| \\$$$$$$  | $$$$$$  |$$  /   \\$$ |\\$$$$$$  |$$ | \\$$\\ $$$$$$\\ 
\\__|      \\______|\\________|\\______|\\__|             \\______/ \\________|\\________|\\__|       \\______/   \\______/ \\__/     \\__| \\______/ \\__|  \\__|\\______|`.trim();
        }

        this.output.innerHTML += `
            <pre style="color: #28c940; font-size: 5px; line-height: 5px; white-space: pre; font-family: 'Courier New', Courier, monospace;">${asciiContent}</pre><br>`;
    }
}