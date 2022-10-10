// const fs = require("fs");
// const handlebars = require("handlebars");

// const forgotPasswordTemplate = fs.readFileSync(
//   "./backend/views/forgotPassword.handlebars",
//   "utf-8"
// );

// const compileTemplate = handlebars.compile(forgotPasswordTemplate);

// const sendEmail = async (options) => {
//   const msg = {
//     to: options.email, // Change to your recipient
//     from: `${process.env.SENDGRID_API_EMAIL_FROM_NAME} <${process.env.SENDGRID_API_EMAIL_FROM}>`, // Change to your verified sender
//     subject: options.subject,
//     html: compileTemplate({ resetUrl: options.resetUrl }),
//   };
//   console.log(options.email)
// };

// module.exports = sendEmail;
