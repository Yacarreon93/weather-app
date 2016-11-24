const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
            .options({
                address: {
                    demand: true,
                    alias: 'a',
                    describe: 'Address to fetch weather for',
                    string: true
                }
            })
            .help()
            .alias('help', 'h')
            .argv

geocode.geocodeAddress(argv.address, (errMsg, results) => {
    
    if (errMsg) {

        console.log(`ERROR: ${errMsg}`)
        
    } else {

        console.log(results.address)
        weather.getWeather(results.latitude, results.longitude, (errMsg, results) => {
    
            if (errMsg) {

                console.log(`ERROR: ${errMsg}`)
                
            } else {

                console.log(`Current temperature: ${results.temperature}`)
                console.log(`Feels like: ${results.apparentTemperature}`)
            
            }

        })

    }

})
