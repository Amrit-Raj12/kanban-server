const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')

dotenv.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amrit.raj1224@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let you know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amrit.raj1224@gmail.com',
        subject: 'Sorry to see go you!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

const sendResetEmail = (email, name, id) => {
    sgMail.send({
        to: email,
        from: 'amrit.raj1224@gmail.com',
        subject: 'Password Reset!',
        text: `Hello. ${name} <br> To reset password click here ${id}`
        // html: `<p> Hello. <br> Welcome to Task App. <br> You new password is: <b> ${password} </b></p>`
    })
    // .then(() => {}, error => {
    //     console.error(error)

    //     if(error.response){
    //         console.error(error.response.body)
    //     }
    // })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
    sendResetEmail
}