export default class Terminal {
    constructor(input, output) {
        this.input = document.querySelector(input);
        this.output = document.querySelector(output);
        this.githubButton = document.querySelector('#githubButton');
        this.linkedinButton = document.querySelector('#linkedinButton');
    }

    // initEventListeners() {
    //     this.input.addEventListener('keydown', (event) => {
    //         this.handleInput(event);
    //     });
    //     if (this.githubButton) {
    //         this.githubButton.addEventListener('click', (event) => {
    //             window.open("https://github.com/FilipSzzz", "_blank");
    //         });
    //     }
    //
    //     if (this.linkedinButton) {
    //         this.linkedinButton.addEventListener('click', (event) => {
    //             window.open("https://www.linkedin.com/in/filip-szlagowski-41a5b2319/", "_blank");
    //         });
    //     }
    // }
    handleInput(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = this.input.value.trim();
            this.output.innerHTML += `<span style="color: #777674;">fszlagowski@terminal: </span>${command}<br>`;
            this.handleCommand(command);
            this.input.value = '';this.output.parentElement.scrollTop = this.output.parentElement.scrollHeight;
        }
    }
    handleCommand(command) {
        if (command === 'print'){
            this.print();
        } else if (command === 'clear'){
            this.output.innerHTML = '';
        } else if (command === 'help'){
            this.output.innerHTML += 'Dostępne komendy: <br>';
        } else if (command === 'ls'){
            this.output.innerHTML += 'github linkedin offer contact<br>';
        }else if (command === 'linkedin') {
            this.output.innerHTML += 'Otwieram LinkedIn <br>';
            window.open("https://www.linkedin.com/in/filip-szlagowski-41a5b2319/", "_blank");
        }else if (command === 'github') {
            this.output.innerHTML += 'Otwieram GitHub<br>';
            window.open("https://github.com/FilipSzzz", "_blank");
        }
        else if (command === '') {
        } else {
            this.output.innerHTML += `Nieznana komenda: ${command}<br>`;
        }
    }
    print() {
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