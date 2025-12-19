export default class Terminal {
    constructor(input, output) {
        this.input = document.querySelector(input);
        this.output = document.querySelector(output);

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
        if (command.toLowerCase() === 'clear'){
            this.output.innerHTML = '';
        } else if (command.toLowerCase() === 'help'){
            this.output.innerHTML += 'Dostępne komendy: <br>';
        } else if (command.toLowerCase() === 'ls'){
            this.output.innerHTML += 'github linkedin offer contact<br>';
        }else if (command.toLowerCase() === "crypto"){
            this.output.innerHTML += 'BTC ETH XRP DODGE USDT BNB USDC SOL TRX ADA <br>';
        }
        else if (command.toLowerCase() === '') {
        } else {
            this.output.innerHTML += `Nieznana komenda: ${command}<br>`;
        }
    }
    printInitialMessage(){
        this.printASCII();
        // this.output.innerHTML += 'Witaj na mojej stronie!<br>';
        // this.output.innerHTML += 'Jestem studentem informatyki na PJATK<br>';
        // this.output.innerHTML += 'Moje zainteresowania to: '
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