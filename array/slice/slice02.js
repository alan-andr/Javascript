const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];

const businessDays = daysOfWeek.slice(1,6);

const weekendDays = daysOfWeek.slice(0, 1).concat(daysOfWeek.slice(6));

console.log(`Dias da semana: ${daysOfWeek}`);
console.log('----------------------------------------------------------------------------');
console.log(`Dias úteis: ${businessDays}`);
console.log('----------------------------------------------------------------------------');
console.log(`Final de semana: ${weekendDays}`);