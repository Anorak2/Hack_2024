const express = require("express");
var router = express.Router();

const sendMail = require("../sendMail.js");
const HTML_TEMPLATE = require("../html_template.js");

router.get('/', function(req, res, next) {
    const message = "Hi there, :P"
    const options = {
        from: "TESTING <project.email888129123@gmail.com>", // sender address
        to: "adamcoleberry@gmail.com", // receiver email
        subject: "Wassup", // Subject line
        text: message,
        html: HTML_TEMPLATE(message),
    }
    sendMail(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    })

    res.render('mail', { title: 'Express' });
});

module.exports = router;
