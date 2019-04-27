import nodemailer from 'nodemailer';
import config from '../config.json';

/**
 * Class defining the nodemailer utilities
 */
class Mailer {

    /**
     * Constructor
     * @return {Object}
     * Instance of this class
     */
    constructor() {

        this.transporter = nodemailer.createTransport({
            service: config.mailer.service,
            auth: {
                user: config.mailer.user,
                pass: config.mailer.pass
            }
        });
    }

    /**
     * sends mail to User
     *
     * @param {object} user object containing user details.
     * @returns {Promise} Promise after sending mail.
     */
    sendEmail(user) {

        return new Promise((resolve, reject) => {

            let {
                userId,
                userName,
                email
            } = user;

            let mailOptions = {
                from: config.mailer.user,
                to: email,
                subject: config.mailer.subject,
                text: `hi ${userName} , ${config.mailer.MessageBody}`
            };

            this.transporter.sendMail(mailOptions, function (error, result) {
                if (error) {
                    console.log("Error sending mail ", error);
                    reject(`Failed to send mail to ${userId} : ${userName} : ${email}`);
                } else {
                    resolve(`Mail sent to ${userId} : ${userName} : ${email}`);
                }
            });
        });
    }
}

export default Mailer;