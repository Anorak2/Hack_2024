import nodemailer from 'nodemailer';
const html = `
    <h1> hello world </h1>
    <p> this better work</p>
`       
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: 'project.email888129123@gmail.com',
        pass: 'ifcg aswt jwgj auzy'
    }
});

/** create reusable sendmail function 
@params {object} options - mail options (to, subject, text, html)
@params {function} callback - callback function to handle response
*/

const sendMail = async (mailDetails, callback) => {
    try {
      const info = await transporter.sendMail(mailDetails)
      callback(info);
      console.log(info);
    } catch (error) {
      console.log(error);
    } 
  
};
export default sendMail;