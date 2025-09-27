const bankAccount = {
    ownerName: 'Alice Smith',
    accountNumber: '12345-6',
    balance: 1000,
    transactions: [],

    deposit(amount = 0) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'deposit', amount: amount, date: new Date() });
            return `Deposit of $${amount} successful, New Balance: ${this.balance.toFixed(2)}.`;
        } else {
            return `Deposit failed. Please provide a positive amount`;
        }
    },

    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient funds. Current balance: $${this.balance.toFixed(2)}`
        } else {
            this.balance -= amount;
            this.transactions.push({ type: 'withdrawal', amount: -amount, date: new Date() })
            return `Withdrawal $${amount.toFixed(2)} successful.`;
        }
    },

    getTransactionHistory() {
        const transactions = this.transactions.map(history => history);
        return transactions;
    }
};

console.log(bankAccount.deposit(200));
console.log(bankAccount);
console.log('===================================================');
console.log(bankAccount.withdraw(1200));
console.log(bankAccount);
console.log('===================================================');
console.log(bankAccount.getTransactionHistory());