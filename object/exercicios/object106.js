const gym = {
    members: [
        { name: 'Lucas', plan: 'mensal', isActive: true },
        { name: 'Paula', plan: 'anual', isActive: true },
        { name: 'Roberto', plan: 'trimestral', isActive: false },
        { name: 'Fernanda', plan: 'anual', isActive: true },
        { name: 'Júlia', plan: 'mensal', isActive: false }
    ],

    showActiveMembers() {
        const activeMembers = this.members
        .filter(member => member.isActive)
        .map(member => member.name);

        if (activeMembers.length === 0) {
            return `No members active in the gym.`;
        }

        return activeMembers;
    },

    quantityPerPlan(planName) {
        let counter = 0;

        this.members.forEach(gym => {
            if (gym.plan.toLowerCase() === planName.toLowerCase()) {
                counter += 1;
            }
        })

        return `${planName} plan has ${counter} user${counter !== 1 ? 's' : ''}`;
    }
};

console.log(gym.showActiveMembers());
console.log(gym.quantityPerPlan('trimestral'));