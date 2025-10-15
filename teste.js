const input1 = 5;
const input2 = 'exemplo';
let resumo = '';

function Sum(num1, num2, res = '') {
    if (!isNaN(num2) && num2.trim() !== '') {
        res = num1 + Number(num2);
    } else {
        res = '';
    }

    return res;
};

resumo = Sum(input1, input2, resumo);

console.log(resumo);
