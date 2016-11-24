const request = require('request')

var getWeather = (lat, lng, callback) => {
    
    request({
        
    url: `https://api.darksky.net/forecast/38d773a63c1d0b44b345062db644ab33/${lat},${lng}`,
    json: true

    }, (error, response, body) => {

        if (error) {  
                    
            callback('Unable to connect to Forecast.io service')

        } else if (response.statusCode === 400) {

            callback('Unable to fetch weather')

        } else if (response.statusCode === 200) {

            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })

        }

    })

}

module.exports.getWeather = getWeather