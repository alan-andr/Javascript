const bankAccount = {
    owner: 'Carlos',
    balance: 1000,

    deposit(num) {
        this.balance += num 
    },

    withdraw(num) {
        if (num > this.balance) {
            return `Retirada não permitida, saldo insuficiente R$${this.balance.toFixed(2)}`;
        } 
        this.balance -= num;
        return `Novo saldo: R$${this.balance.toFixed(2)}`;
    }
};

console.log(bankAccount.withdraw(500));

console.log(bankAccount);
