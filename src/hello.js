import nodemailer from "nodemailer"


exports.handler = async (event, context) => {
// createTestAccount is a function that creates a sample SMTP server for you to use for testing (using the https://ethereal.email service)
let testAccount = await nodemailer.createTestAccount()
      
// right now we are "authenticating" our email service
let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', // this is an SMTP address
  port: 587, // this is the port we send the request to
  secure: false, // whether or not the email is secured or not (this is off depending on the port)
  auth: {
    // username and password for the SMTP host. this is auto generated from the first line
    user: testAccount.user,
    pass: testAccount.pass,
  },
})
      
// now we are sending the email itself, with all the data
let info = await transporter.sendMail({
  from: 'sender@example.com',
  to: 'louisakavindu@gmail.com', // enter in your personal email here
  subject: 'subject_sample',
  text: 'text_sample',
})
      
// logging functions to get any data we may need
console.log('Message sent: %s', info.messageId)
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  return { statusCode: 200  }

};
