function parImpar(n) {
    if (n % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar'
    }
}

let res = parImpar(11);
console.log(res);