const weatherForecast = {
  "2025-10-14": {
    temperature: {
      min: 18,
      max: 26,
      unit: "Celsius"
    },
    condition: "Sunny",
    humidity: 65,
    wind: {
      speed: 15,
      direction: "NW"
    }
  },
  "2025-10-15": {
    temperature: {
      min: 19,
      max: 24,
      unit: "Celsius"
    },
    condition: "Partly Cloudy",
    humidity: 72,
    wind: {
      speed: 12,
      direction: "SW"
    }
  },
  "2025-10-16": {
    temperature: {
      min: 16,
      max: 22,
      unit: "Celsius"
    },
    condition: "Rainy",
    humidity: 88,
    wind: {
      speed: 25,
      direction: "NE"
    }
  }
};

function getForecastSummary(forecast) {
    let summary = {};

    for (const key in forecast) {
        const { temperature: { max , min }, condition } = forecast[key];
        summary[key] = `Max: ${max}°C, Min: ${min}°C, Condition: ${condition}`;   
    }

    return summary;
};

console.log(getForecastSummary(weatherForecast));