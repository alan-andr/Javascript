const appSettings = {
    appVersion: '1.2.0',
    theme: {
        darkMode: true,
        font: 'Roboto'
    },
    userPreferences: {
        username: 'dev_user_01',
        notifications: {
            pushNotifications: true,
            emailNotifications: true
        }
    }
};

appSettings.userPreferences.notifications.emailNotifications = false;

const { appVersion, userPreferences: { username } } = appSettings;

console.log(`User ${username} is using ${appVersion}`);

console.log(appSettings);

