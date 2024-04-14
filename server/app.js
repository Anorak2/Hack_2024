import HTML_TEMPLATE from "./html_template.js";
import express from "express";
import sendMail from "./sendMail.js";

const PORT = process.env.PORT || 8080;
const app = express();

const message = "Hi there, :P"
const options = {
    from: "TESTING <project.email888129123@gmail.com>", // sender address
    to: "adamcoleberry@gmail.com", // receiver email
    subject: "Send email in Node.JS with Nodemailer using Gmail account", // Subject line
    text: message,
    html: HTML_TEMPLATE(message),
}

app.get("/api", (req, res) => {
    sendMail(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    })
    res.json({ message: "Hello from server!" });
  });
 
app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);