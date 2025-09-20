const bookLaunchEvent = {
    eventName: "The Future of Code Launch",
    location: {
        address: "123 Tech Avenue",
        city: "Silicon Valley",
        country: "USA"
    },
    eventDate: "2025-10-20",
    attendees: {
        author: {
            name: "Alex Johnson",
            specialty: "AI & Robotics",
            bio: "Renowned expert in machine learning."
        },
        speakers: [
            { name: "Maria Rodriguez", topic: "The Ethics of Code" },
            { name: "David Chen", topic: "Building Scalable Systems" }
        ],
        specialGuests: [
            "Sophia Loren",
            "Elon Musk"
        ]
    }
};

const { eventName, 
    location: { city },
    attendees: { author: { name: authorName},
    speakers: [{ topic: firstTopic }], specialGuests: [firstGuest],
 },
} = bookLaunchEvent;

console.log(eventName);
console.log(city);
console.log(authorName);
console.log(firstTopic);
console.log(firstGuest);