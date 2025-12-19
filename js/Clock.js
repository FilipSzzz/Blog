export default class Clock {
    showTime(){
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        document.getElementById('date').textContent = `${hours}:${minutes}:${seconds}`;
    }
}