const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=3e62cb2cf69733700060502905108848';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to access weather service', undefined);
        } else if (response.body.cod === '400') {
            callback('Unable to find location', undefined);
        } else {
            const body = response.body;
            const weather = body.weather[0];

            callback(undefined, weather.main + ', ' + weather.description + '. It is ' + body.main.temp + ' degrees temperature. Humidity ' + body.main.humidity + '%.');
        }
    })
}

module.exports = forecast;