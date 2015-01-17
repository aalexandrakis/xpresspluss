Meteor.methods({
  sendEmail: function (receiver, subject, messageBody) {
    this.unblock();
    var nodemailer = Nodemailer;
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service : "gmail",
        auth : {
            user : process.env.GMAIL,
            pass : process.env.GMAIL_PASSWORD
        }
    });
        var mailOptions = {
            from : "Xpress Pluss", // sender address
            to : receiver == null ? process.env.GMAIL : receiver, // list of receivers
            subject : subject, // Subject line
            html : "<h2>" + messageBody + "</h2>" // html body
        };

        smtpTransport.sendMail(mailOptions, function(error, response) {
            smtpTransport.close();
            if (error){
                return error
            } else {
                return null;
            }
        });


  }
});