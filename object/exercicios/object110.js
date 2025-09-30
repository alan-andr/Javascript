const gym = {
    members: [
        {
            name: 'João',
            age: 25,
            plan: 'Mensal',
            checkIns: 10
        },
        {
            name: 'Ana',
            age: 30,
            plan: 'Anual',
            checkIns: 45
        },
        {
            name: 'Carlos',
            age: 22,
            plan: 'Semestral',
            checkIns: 18
        },
        {
            name: 'Beatriz',
            age: 28,
            plan: 'Mensal',
            checkIns: 5
        }
    ],

    addCheckin(memberName) {
        const existing = this.members.find(member => member.name === memberName);

        if (existing) {
            existing.checkIns += 1;
            return `${existing.name}'s checkin was made successfully.`;
        } else {
            return `Member doesn't exists in the gym.` ;
        }
    },

    getMostActiveMember() {
        const memberWithMoreCheckins = this.members.reduce((topMember, member) => topMember.checkIns > member.checkIns ? topMember : member);

        return `Member who made more check-ins: ${memberWithMoreCheckins.name}, with ${memberWithMoreCheckins.plan} plan.`;
    }
};

console.log(gym.addCheckin('Beatriz'));
console.log('========================================================');
console.log(gym.members);
console.log('========================================================');
console.log(gym.getMostActiveMember());