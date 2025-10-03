const defaultSettings = {
    theme: "light",
    language: "en-US",
    notifications: {
        email: true,
        push: false,
        sms: false
    },
    privacy: "public"
};

const userOverrides = {
    theme: "dark",
    notifications: {
        push: true,
        newsletter: true
    }
};

function mergeUserSettings(defaultSet, userPref) {
    const finalSettings = {
        ...defaultSet,
        ...userPref,
        notifications: {
            ...defaultSet.notifications,
            ...userPref.notifications
        }
    };

    const {
        theme: userTheme,
        notifications: { email: emailNotificationStatus }
    } = finalSettings;

    return `Theme: ${userTheme}, email status: ${emailNotificationStatus}`;
};

console.log(mergeUserSettings(defaultSettings, userOverrides));