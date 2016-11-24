const yargs = require('yargs')
const geocode = require('./geocode/geocode')

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

        console.log(JSON.stringify(results, undefined, 2))
        
    }

})
