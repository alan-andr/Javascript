const userProfile = {
  userId: 'u12345',
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1990-05-15'
  },
  contactInfo: {
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  },
  accountSettings: {
    theme: 'dark',
    notifications: {
      email: true,
      sms: false
    }
  },
  posts: ['post_id_1', 'post_id_2', 'post_id_3']
};

function greetUser(profile) {
    const { personalInfo: { firstName, lastName }, contactInfo: { email } } = profile;

    return `Hello, ${firstName} ${lastName}! We will contact you at ${email}.`;
};

function addLastLogin(profile) {
    profile.lastLogin = new Date().toISOString();

    return profile;
};

function switchNotifications(profile) {
    profile.accountSettings.notifications.email = !profile.accountSettings.notifications.email;

    return profile;
};

console.log(greetUser(userProfile));
console.log(addLastLogin(userProfile));
console.log(switchNotifications(userProfile));
console.log(switchNotifications(userProfile));
console.log(switchNotifications(userProfile));