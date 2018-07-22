const ONE_SECOND = 1000;

class DateTimeHelper {
    constructor() {
        this.interval = null;
    }

    startTimer() {
        this.interval = setInterval(this.printTime.bind(this), ONE_SECOND);
    }

    stopTimer() {
        clearInterval(this.interval);
    }

    static printTime() {
        const date = new Date();
        console.log(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }

}

module.exports = DateTimeHelper;
