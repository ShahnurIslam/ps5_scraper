const nodemailer = require("nodemailer");
 

export class Email{


    message_gen(stock_dict){
        console.log(stock_dict)
    }


    async main(message) {
 
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
            // "<table style='margin-left: auto; margin-right: auto;'> <tbody> <tr> <td style='text-align: center;'>" 
            html: "<p style='font-family:Helvetica;font-size:18px;'> Hey! <br><br> I think I may have found some stock: <br/>" + message + '<br/> Thanks as always <br/> Shan <br/> <br/>  </td> </tr> </tbody> </table>' + 
            "<em> This email is generated from Shans bot </em></p>"  // html body
        });
     
        console.log("Message sent: %s", info.messageId);
    }

}
