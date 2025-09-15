const defaultConfig = {
    font: 'Arial',
    fontSize: '14px' 
};

const userConfig = {
    font: 'Poppins',
    fontSize: '16px'
};

const priorityConfig = {...defaultConfig, ...userConfig};

console.log('Configuração padrão: ',defaultConfig);
console.log('Configuração do Usuário: ', userConfig);
console.log('Prioridade de Configuração: ', priorityConfig);