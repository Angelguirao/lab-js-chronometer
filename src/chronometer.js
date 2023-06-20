class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }

    start(printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (typeof printTimeCallback === 'function') {
          printTimeCallback();
        }
      }, 1000);
    }

    getMinutes() {
      return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
      return this.currentTime % 60;
    }

    computeTwoDigitNumber(value) {
      const stringValue = '' + value;
    
      if (stringValue.length === 1) {
        return '0' + stringValue;
      } else {
        return stringValue.slice(0, 2);
      }
    }

    stop() {
      clearInterval(this.intervalId);
    }

    reset() {
      this.currentTime = 0;
    }

    split() {
      const minutes = this.getMinutes();
      const seconds = this.getSeconds();
      const formattedMinutes = this.computeTwoDigitNumber(minutes);
      const formattedSeconds = this.computeTwoDigitNumber(seconds);
      return `${formattedMinutes}:${formattedSeconds}`;
    }
}
