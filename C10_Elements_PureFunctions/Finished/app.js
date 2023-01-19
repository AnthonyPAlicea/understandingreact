let counter = { name: 'Counter' };
let counterValue = 1;

function pureCounter(ctr, value) {
    return `${ ctr.name } ${ value }`;
}

function notPureCounter(ctr, value) {
    ctr.name = ctr.name + ' Tony';
    counterValue = counterValue + 1;
    return `${ ctr.name } ${ value }`;
}

console.log(pureCounter(counter, counterValue));
console.log(pureCounter(counter, counterValue + 1));
console.log(pureCounter(counter, counterValue));
console.log('---');
console.log(notPureCounter(counter, counterValue));
console.log(notPureCounter(counter, counterValue + 1));
console.log(notPureCounter(counter, counterValue));
console.log(counter);