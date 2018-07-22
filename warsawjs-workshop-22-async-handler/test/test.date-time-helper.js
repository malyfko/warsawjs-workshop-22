const DateTimeHelper  = require('../src/date-time-helper');

const assert = (a, msg = 'Assertion failed') => {
    if (!a) {
        throw new Error(msg);
    }

    return true;
};


describe('DateTimeHelper', () => {
    it('should return object', () => {
        const timer = new DateTimeHelper();
        assert(typeof timer === 'object');
    });

    it('should be function', () => {
        assert(typeof DateTimeHelper === 'function');
    });

    it('should be class', () => {
        assert((/^class/).test(DateTimeHelper.toString()));
    });

    it('should run with delay 1000ms', (done) => {
        DateTimeHelper.prototype.printTime = function() {
            const diff = Date.now() - startTime;
            assert(diff === 1000, `Failed with overtime ${diff - 1000}ms`);
            this.stopTimer();
            done();
        };

        const startTime = Date.now();

        const a = new DateTimeHelper();
        a.startTimer();
    });
});

