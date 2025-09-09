const names = ['Lucas', 'Ana', 'Pedro', 'Beatriz'];

const orderedNames = [...names].sort((a, b) => a.localeCompare(b));

console.log('------------- Nomes Ordenados -------------');
console.log('Nomes desordenados: ', names);
console.log('-------------------------------------------');
console.log('Nomes ordenados: ', orderedNames);