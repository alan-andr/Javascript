const defaultSettings = {
    theme: 'light',
    notifications: {
        emails: true,
        push: false
    },
    language: 'English'
};

const userPreferences = {
    theme: 'dark',
    notifications: {
        push: true,
        sms: false
    }
};

function mergeSettings(defaultSet, userSet) {
    const finalSettings = { ...defaultSet, ...userSet }

    finalSettings.notifications = { ...defaultSet.notifications, ...userSet.notifications };

    return finalSettings;
};

console.log(mergeSettings(defaultSettings, userPreferences));