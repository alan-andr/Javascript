const waitAndRun = (seconds, callback) => {
    setTimeout(() => {
         console.log(callback(seconds));
         console.log('-------------------------------------');
    }, seconds * 1000);
}

const double = (seconds) => seconds * 2;

let seconds = 5;

console.log('-------- Esperar e Executar ---------');
waitAndRun(seconds, double); 


