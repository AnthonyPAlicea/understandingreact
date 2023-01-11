let counterName = 'Counter';
let counterValue = 1;

function pureCounter(name, value) {
    console.log(`${ name } ${ value }`);
}

function notPureCounter(name, value) {
    name = 'Tony';
    console.log(`${ name } ${ value }`);
    counterValue = counterValue + 1;
}

pureCounter(counterName, counterValue);
pureCounter(counterName, counterValue);
pureCounter(counterName, counterValue + 1);
console.log('---');
notPureCounter(counterName, counterValue);
notPureCounter(counterName, counterValue);
notPureCounter(counterName, counterValue + 1);