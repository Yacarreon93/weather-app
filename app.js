const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=cp%2020229%20aguascalientes',
    json: true
}, (error, response, body) => {
    console.log(body)
})