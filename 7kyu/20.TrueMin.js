function min(a, b) {
    if (a == NaN || b == NaN) {
        return a
    } else {
        return (a < b) ? a : b;
    }
}

console.log(min(1, -2.5) === -2.5, 'Return the minimum of the two arguments');
console.log(isNaN(min(1.5, NaN)), 'Any NaN value should return NaN');
console.log(isNaN(min(1.5, undefined)), 'Any undefined value should return NaN');
console.log(min(-Infinity, Infinity) === -Infinity, 'Infinity should be handled like normal numbers');
console.log(min(null, 2.5) === 0, 'treat null as if it were 0');