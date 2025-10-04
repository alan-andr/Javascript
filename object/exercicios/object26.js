const poll = {
    question: 'What is your favorite programming language?',
    options: ['JavaScript', 'Python', 'Rust', 'Go'],
    votes: {},

    registerVote: function(optionName) {
        const existing = this.options.find(option => option.toLowerCase() === optionName.toLowerCase());

        if (!existing) {
            return `Option "${optionName}" doesn't exists.`
        }

        if (!this.votes[existing]) {
            this.votes[existing] = 0;
        }

        this.votes[existing] += 1;
        return `You selected "${existing}" as option.`;
    },

    displayResults: function() {
        const values = Object.values(this.votes);

        const totalVotes = values.reduce((total, vote) => total + vote, 0);

        for (const key in this.votes) {
            const percentage = ((this.votes[key] / totalVotes) * 100).toFixed(2);

            console.log(`${key}: ${this.votes[key]} Votes (${percentage}%)`);
        }
    }
};




poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('python');
poll.registerVote('Rust');
poll.registerVote('Rust');
poll.registerVote('Rust');
poll.registerVote('Go');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
poll.registerVote('Javascript');
console.log('==================================');
poll.displayResults();
console.log('==================================');