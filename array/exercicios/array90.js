const defaultSettings = {
    theme: 'light',
    fontSize: 14,
    showNotifications: true
};

const userSettings = {
    fontSize: 16,
    showNotifications: false,
    language: 'pt-BR'
};

const prioritySettings = {...defaultSettings, ...userSettings};

const copyPrioritySettings = {...prioritySettings};

copyPrioritySettings.theme = 'dark';

const {fontSize, language} = prioritySettings;

console.log('Configurações Padrão: ', defaultSettings);
console.log('================================================================');
console.log('Configurações de Usuário: ', userSettings);
console.log('================================================================');
console.log('Configurações Priorizadas: ', prioritySettings);
console.log('================================================================');
console.log('Configurações de tema alterado: ', copyPrioritySettings);
console.log('================================================================');
console.log('Tamanho da fonte: ', fontSize, 'px');
console.log('Linguagem: ', language);