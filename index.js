const express = require('express');
var request = require('request');
const process = require('process'); 

greetingHost = process.env['PLANET_LICENSE_SERVER_HOST'] || 'http://localhost:3001';
//greetingHost = process.env['PLANET_LICENSE_SERVER_HOST'];

console.log(greetingHost);

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to get-msg, v1.0.');
});

app.get('/getMessage', (req, res) => {
    request(greetingHost + '/getGreeting', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the greeting
            res.send(body);
        }
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`get-msg: Listening on port ${port}...`)});