import nodemailer from 'nodemailer';


class Mailer{


    constructor(){

        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ram4168@gmail.com',
              pass: 'zmjxwclcrcrwkidm'
            }
        });
    }

    sendEmail(user){

       return  new Promise((resolve, reject) => {
          
            let {userId,userName,email} = user;

            let mailOptions = {
                from: 'ram4168@gmail.com',
                to: email,
                subject: 'Sending good morning using Node.js',
                text: 'you are awesome!'
            };
        
            this.transporter.sendMail(mailOptions, function(error, result){
                if (error) {
                    console.log("Error sending mail :",error);
                    reject(`Failed to send mail to ${userId} : ${userName} : ${email}`);
                } else {
                    resolve(`Mail sent to ${userId} : ${userName} : ${email}`);
                }
            });
        });
    }
}

export default Mailer;


