
const HTML_TEMPLATE = (text) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>NodeMailer Email Template</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      img {
        display: block;
        margin: 0 auto; /* Centers the image */
        height: 50%;
        width: 50%;
      }
      .container {
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #f4f4f4;
      }
      .email {
        width: 80%;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .email-header {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      .email-header h1 {
        margin: 0;
        font-size: 24px;
      }
      .email-body {
        padding: 20px;
      }
      .email-footer {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      .email-footer p {
        margin: 0;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="email">
        <div class="email-header">
          <h1>Job Alert</h1>
        </div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhackku.org%2Fimages%2Fflower-right.png&f=1&nofb=1&ipt=2c349ab1fba096d9a219c0f07401df71172501b7f7d45cbd08f49c8f83d2d9a2&ipo=images"> 
        <div class="email-body">
          <p>${text}</p>
        </div>
        <div class="email-footer">
          <p>Thank you for your attention.</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  
  `;
};

module.exports = HTML_TEMPLATE;
