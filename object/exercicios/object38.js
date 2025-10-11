const userProfile = {
    username: 'alex_dev',
    email: 'alex.dev@example.com',
    isActive: true,
    profileInfo: {
        fullName: 'Alex Johnson',
        bio: 'Frontend developer passionate about JavaScript and clean code.',
        location: {
            city: 'New York',
            country: 'USA'
        }
    },
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
    followers: 458
};

const getUserLocation = function(userProfile) {
    const { profileInfo: { location: { city, country } } } = userProfile;

    return `${city}, ${country}`;
};

const { username, email, profileInfo: { bio } } = userProfile;

const addSkill = function(userProfile, newSkill) {
    const existing = userProfile.skills.find(skill => skill.toLowerCase() === newSkill.toLowerCase());

    if (existing) return `You already have ${newSkill} skill. Add a different one!`;
    
    userProfile.skills.push(newSkill);

    return userProfile
};


console.log(getUserLocation(userProfile));
console.log('============================================================');
console.log(addSkill(userProfile,'Next.js'));

