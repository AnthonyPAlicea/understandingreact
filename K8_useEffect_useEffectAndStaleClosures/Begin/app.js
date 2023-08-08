function createCounter(incBy) {
    let value = 0;

    function increment() {
        value += incBy;
        console.log(value);
    }

    const message = `Current value is ${value}`;
    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createCounter(1);
increment();
increment();
increment();

log();