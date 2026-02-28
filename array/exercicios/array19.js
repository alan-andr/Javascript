const batch1 = ['log_01.txt', 'log_02.txt', 'log_03.txt'];
const batch2 = ['log_04.txt', 'log_05.txt', 'error.log'];

const allLogs = batch1.concat(batch2)

let priorityLogs = [...allLogs].slice(1, 4)

let errorLogLocation = allLogs.indexOf('error.log')

let existLog = allLogs.some( item => item === 'log_08.txt')

let arrayToString = allLogs.join('\n')

let fileExtension = allLogs.some( item => item.endsWith('.log'))

console.log(allLogs)
console.log(priorityLogs)
console.log(errorLogLocation)
console.log(existLog)
console.log(arrayToString)
console.log(fileExtension)