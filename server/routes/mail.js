const express = require("express");
var router = express.Router();

const sendMail = require("../sendMail.js");
const HTML_TEMPLATE = require("../html_template.js");

router.get('/', function(req, res, next) {
    // Retrieve email and name from query parameters or request body
    const { to, name, sunday, monday, tuesday, wednesday, thursday, friday, saturday} = req.query;

    const isWorking = (value) => value ? 'Working' : 'Not working';

    // Construct the message
    const message = `Hi ${name}, your schedule has been released\n Sunday: ${isworking(sunday)}\n Monday: ${isworking(monday)}\n Tuesday: ${isworking(tuesday)}\n Wednesday: ${isworking(wednesday)}\n Thursday: ${isworking(thursday)}\n Friday: ${isworking(friday)}\n Saturday: ${isworking(saturday)}`;

    // Configure email options
    const options = {
        from: "TESTING <project.email888129123@gmail.com>",
        to: to, // Use the dynamically provided email address
        subject: "SCHEDULE RELEASED",
        text: message,
        html: HTML_TEMPLATE(message),
    };

    // Send the email
    sendMail(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    });

    res.render('mail', { title: 'Express' });
});

module.exports = router;
