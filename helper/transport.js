const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

const mailer = async (info, action) =>{

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.SEND_MAIL,
            pass:process.env.PASS_MAIL
        },
        tls: {
            rejectUnauthorized: false
          }

    });

    let subject;
    let emailto;
    let composition;

    switch(action){

        case "createAccount" :
            subject = "account created";
            emailto = info.email;
            composition = `<p>
                your account created successfully
            </p>`;

            break;

            default:
                subject ="";
                break;
    }

    const mailOptions = {
        from : `AUFrosty ${process.env.SEND_MAIL}`,
        to : emailto,
        subject,
        html:composition,
    };
    try{
        const sendEmail = transporter.sendMail(mailOptions, (err,info)=>{
            
            console.log(err)
            console.log(info)
            return sendEmail
        });
        
    }catch(error){
        console.log(error)
        return error
    }


}

module.exports = mailer
