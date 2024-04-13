// Dependencies:
// express cors twilio nodemon

const express = require('express');
const cors = require('cors');

// twilio req - texting api
const accountSid = "account_id";
const authToken = "auth_token"; 
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(cors()); // blocks browser from restricting data

// Welcome page for the server
app.get('/', (req, res) => {
    res.send('Welcome to the Server :D')
});

app.get('/send-text', (req, res) => {
    const {recipient, textmessage} = req.query;

    client.messages.create({
        body: textmessage,
        to: recipient,
        from: 'twilio_num'
    }).then((message) => console.log(message.body));
})

// must have nodemon installed, http://localholst:4000
app.listen(4000, ()=> console.log("Running on port 4000"))