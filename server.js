#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./app');
const debug = require('debug')('hotelbedspro:server');
const http = require('http');
const sequelize =  require('./util/database');
const City = require('./model/city');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
sequelize
   // .sync({force:true})
    .sync()
    .then(result=>{
      /*  City.bulkCreate([
            {name:'Chandigarh'},
            {name:'Delhi'},
            {name:'Gurgaon'},
            {name:'Ghaziabad'},
            {name:'Pushkar'},
            {name:'Jaipur'},
            {name:'Udaipur'},
            {name:'Jodhpur'},
            {name:'Jaisalmer'},
            {name:'Ranthambore'},
            {name:'Agra'},
            {name:'Bikaner'},
            {name:'Ajmer'},
            {name:'Ahmedabad'},
            {name:'Surat'},
            {name:'Hyderabad'},
            {name:'Kolkata/Calcutta'},
            {name:'Goa/Panji'},
            {name:'Chennai'},
            {name:'Pune'},
            {name:'Amritsar'},
            {name:'Mussoorie'},
            {name:'Varanasi'},
            {name:'Indore'},
            {name:'Lucknow'},
            {name:'Kota'},
            {name:'Mumbai'},
            {name:'Munnar'},
            {name:'Thekkady'},
            {name:'Kovalam'},
            {name:'Kochi/Cochin'},
            {name:'Kanyakumari'},
            {name:'Trivandrum/Thiruvananthapuram'},
            {name:'Srinagar'},
            {name:'Shimla'},
            {name:'Manali'},
            {name:'Jammu'},
            {name:'Nagpur'},
            {name:'Ludhiana'},
            {name:'Jalandhar'},
            {name:'Coorg'},
            {name:'Ooty'},
            {name:'Mysore'},
            {name:'Dehradun'},
            {name:'Rishikesh'},
            {name:'Haridwar'},
            {name:'Bhopal'},
            {name:'Lonavala'},
            {name:'Mount Abu'},
            {name:'Patna'},
            {name:'Ranchi'},
            {name:'Raipur'},
            {name:'Noida'},
            {name:'Mahabaleshwar'},
            {name:'Katra'},
            {name:'Alibag'},
            {name:'Puri'},
            {name:'Kodaikanal'},
            {name:'Bangalore/Bengaluru'},
            {name:'Nainital'},
            {name:'Allepey'},
            {name:'Kumbalgarh'},
            {name:'Vijaywada'},
            {name:'Visakhapatnam'},
            {name:'Vadodara/Baroda'},
            {name:'Gandhidham'},
            {name:'Gangtok'},
            {name:'Jim Corbett'},
            {name:'Coimbatore'},
            {name:'Guwahati'},
            {name:'Lavasa'},
            {name:'Rajkot'},
            {name:'Bhubaneswar'},
            {name:'Darjeeling'},
            {name:'Madhurai'},
            {name:'Tirupati'},
            {name:'Gwalior'},
            {name:'Khajuraho'},
            {name:'Aurangabad'},
            {name:'Bellary'}
        ]).then(result=>{

        });*/
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
});


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
