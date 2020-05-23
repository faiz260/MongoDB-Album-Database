const config = require('./config')

require('./db')({ MONGO_URI: config.MONGO_URI })
require('./server')({
    port: config.PORT,
    cb: () => {
        console.log(`Server is rumning on port ${config.PORT}`)
    }
})