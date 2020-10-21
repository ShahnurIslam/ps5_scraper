const nodemailer = require("nodemailer");
 

export class Email{
    async main(message:string) {
 
        let transporter = nodemailer.createTransport({
            host: 'smtp.googlemail.com', // Gmail Host
            port: 465, // Port
            secure: true, // this is true as port is 465
            auth: {
                user: process.env.email, 
                pass: process.env.password , 
            },
        });
     
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.email, // sender address
            to: "shahnurislam@hotmail.co.uk", // list of receivers
            subject: "PS5 Stock Notification", // Subject line
            //text: "Hello world?", // plain text body
            html: message, // html body
        });
     
        console.log("Message sent: %s", info.messageId);
    }

}
