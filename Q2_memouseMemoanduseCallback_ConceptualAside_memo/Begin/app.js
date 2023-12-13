function memoizedSquare(a) {
    let memoizedResults = {};
    return function sq(a) {
        if (a in memoizedResults) {
            return memoizedResults[a];
        } else {
            console.log("Calculating square...");
            const result = a * a;
            memoizedResults[a] = result;
            console.log(memoizedResults);
            return result;
        }
    }
}

const memoSq = memoizedSquare();

console.log(memoSq(2));
console.log(memoSq(3));
console.log(memoSq(100));

console.log(memoSq(2));
console.log(memoSq(3));
console.log(memoSq(100));