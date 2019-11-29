
let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;

let config = require('config'); //we load the db location from the JSON files

var appConfig = {
    appRoot: __dirname
}

//db options
let options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

//db connection      
mongoose.connect(config.DBHost, { useNewUrlParser: true }).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
//don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//     //use morgan to log at command line

// }

//parse application/json and look for raw text                                        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

console.log(appConfig.appRoot);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app; // for testing