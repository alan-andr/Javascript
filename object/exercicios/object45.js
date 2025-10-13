const defaultConfig = {
  theme: "light",
  notifications: true,
  language: "en",
  fontSize: 14
};

const userPreferences = {
  theme: "dark",
  fontSize: 16,
  username: "testuser" // Esta propriedade deve ser ignorada
};

function updateSafeConfig(defaultConfig, preferencesConfig) {
    const preferences = {...preferencesConfig};

    delete preferences.username;

    const mergedConfig = {
        ...defaultConfig,
        ...preferences,
    }

    return mergedConfig;
};

console.log(defaultConfig);
console.log(userPreferences);
console.log(updateSafeConfig(defaultConfig, userPreferences));