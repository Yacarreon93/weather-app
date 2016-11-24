const request = require('request')

var getWeather = () => {
    
    request({

    url: 'https://api.darksky.net/forecast/38d773a63c1d0b44b345062db644ab33/21.8689343,-102.3088099',
    json: true

    }, (error, response, body) => {

        if (error) {

            console.log('Unable to connect to Forecast.io service')

        } else if (response.statusCode == 400) {

            console.log('Unable to fetch weather')

        } else if (response.statusCode == 200) {

            console.log(body.currently.temperature)

        }

    })

}

module.exports.getWeather = getWeather