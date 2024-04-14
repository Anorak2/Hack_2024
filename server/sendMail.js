import React, { useState } from 'react';
import nodemailer from 'nodemailer';

const html = `
    <h1> hello world </h1>
    <p> this better work</p>
`

async function sendMail(){
    const transporter = nodemailer.createTransport({
        host: 'mail.openjavascript.info',
        port: 465,
        secure: true,
        auth:{
            user: 'project.email888129123@gmail.com',
            pass:   'TM6Pvpn$A?z."#P'
        }
    });

    const info = await transporter.sendMail({
        from: 'Adam <project.email888129123@gmail.com>',
        to: 'adamcoleberry@gmail.com',
        subject: "testing testing 123",
        html:html,
    })
    console.log("message sent" + info.messageId)

}   

sendMail()
.catch(e => console.log(e));