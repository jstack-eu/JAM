const nodemailer = require("nodemailer");

exports.handler = function (event, context, callback) {
  console.log("ENV VAR: ", process.env.MAIL_LOGIN);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_LOGIN,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // const properties = event.body;


  const properties = JSON.parse(event.body);

  console.log("props: ", properties);


  transporter.sendMail(
    {
      from: process.env.MAIL_LOGIN,
      to: [process.env.MAIL_TO],
      subject: `${process.env.SUBJECT}  ${new Date().toLocaleString()}`,
      text: `
        Er is een bericht aangekomen op de website van 
        ===========================================================
        name
        ${properties.name}
        van
        ${properties.email}
        ===========================================================
        Mail automatisch verstuurd met liefde door Arne
    `,
    },
    function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: "ok" }),
        });
      }
    }
  );
};
