const eventData = {
    eventName: 'Tech Summit 2025',
    date: '2025-09-25',
    location: 'Virtual',
    attendees: [
        { id: 'att01', name: 'James Carter', registered: true },
        { id: 'att02', name: 'Laura Martinez', registered: true },
        { id: 'att03', name: 'David Lee', registered: false }
    ]
};

let registeredAttendess = [];

for (const { registered, name } of eventData.attendees) {
    if (registered === true) {
        registeredAttendess.push(name)
    }
}

eventData.totalAttendees = eventData.attendees.length

console.log(eventData)
console.log('===================================================');
console.log(`Nomes das pessoas registradas: ${registeredAttendess}`);
