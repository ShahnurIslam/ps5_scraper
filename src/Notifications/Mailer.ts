import {Logger} from "../Logger"
const nodemailer = require("nodemailer");
const fs = require('fs');
const YAML = require('yaml');

// We Load in our credentials 


export class Email{

    env:any
    config_json: Object
    email_add:string
    password:string
    host:string
    port: number
    Email_Details:Object

    constructor(logger:Logger){
        this.load_env_yaml(logger)
        this.load_smtp_settings(logger)
        this.load_email_details()
        this.email_add = this.env['email']
        this.password = this.env['password']
        console.log(this.password)
        
    }

    load_smtp_settings(logger:Logger){
        this.config_json  = require("../../config.json")
        this.host = this.config_json['Outgoing_SMTP']['host']
        this.port = this.config_json['Outgoing_SMTP']['port']
    }

    load_email_details(){
        this.Email_Details = this.config_json['Email_Details']
    }

    load_env_yaml(logger:Logger){
        try {
            if (fs.existsSync('.env.yaml')){
                const file = fs.readFileSync('.env.yaml', 'utf8')
                this.env = YAML.parse(file)
            }
        } catch(err){
            logger.error(err)
        }
    }


    message_gen(stock_dict){
        console.log(stock_dict)
    }


    async main(message) {
 
        let transporter = nodemailer.createTransport({
            host: this.host, // Email Host
            port: this.port, // Port
            secure: true, // this is true as port is 465
            auth: {
                user: this.email_add, 
                pass: this.password  , 
            },
        });
     
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: this.email_add, // sender address
            to: "shahnurislam@hotmail.co.uk", // list of receivers
            subject: this.Email_Details['Subject'], // Subject line
            //text: "Hello world?", // plain text body
            // "<table style='margin-left: auto; margin-right: auto;'> <tbody> <tr> <td style='text-align: center;'>" 
            html: "<p style='font-family:Helvetica;font-size:18px;'> Hey! <br><br> I think I may have found some stock: <br/>" + 
            message + "<br/> Thanks as always <br/> "+ this.Email_Details['Sender'] + " <br/> <br/>  </td> </tr> </tbody> </table>" + 
            "<em> This email was generated from "+ this.Email_Details['Sender'] + "s bot </em></p>"  // html body
        });
     
        console.log("Message sent: %s", info.messageId);
    }

}
