const userProfile = {
    username: 'alex_dev',
    email: 'alex.dev@example.com',
    isActive: true,
    profileInfo: {
        fullName: 'Alex Johnson',
        bio: 'Frontend Developer passionate about JavaScript and clean code.',
        location: 'San Francisco, CA'
    },
    activity: [
        { type: 'post', content: 'Just launched a new project!', timestamp: '2025-09-24T10:00:00Z'},
        { type: 'comment', content: 'Great article!', timestamp: '2025-09-24T11:30:00Z' }
    ],

    addActivity(type, content) {
        const timestamp = new Date().toISOString();

        this.activity.push({type, content, timestamp});
    }
}

const { profileInfo: { fullName, location }, username } = userProfile;

console.log(`Fullname: ${fullName}, location: ${location}, username: ${username}`);

userProfile.addActivity('post', 'Watching videos about programming');

userProfile.addActivity('comment', 'Amazing project!');

userProfile.addActivity('like', 'Liked a photo of a sunset.');

console.log(userProfile.activity);

