export default class Slider {
    constructor() {
        this.slider = document.querySelector('#slider');
        this.valueElement = document.querySelector('#password_length_value');
        this.updateValue = this.updateValue.bind(this);
        this.slider.addEventListener('input', this.updateValue);
        this.updateValue();
    }
    updateValue() {
        this.valueElement.textContent = this.slider.value;
    }

}
