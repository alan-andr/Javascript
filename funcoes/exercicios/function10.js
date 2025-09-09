function multiplicationTable(num) {
    console.log('Tabuada do número: ', num, '\n')
    console.log('------------------------');
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
    console.log('------------------------')
}

multiplicationTable(5);