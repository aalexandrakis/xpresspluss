clients = [];

Meteor.methods({
  sendEmail: function (receiver, subject, messageBody) {
    this.unblock();
    var mailOptions = {
        from : "Xpress Pluss", // sender address
        to : receiver == null ? process.env.GMAIL : receiver, // list of receivers
        subject : subject, // Subject line
        html : "<h2>" + messageBody + "</h2>" // html body
    };

    try {
        Email.send(mailOptions);
    } catch (ex) {
        throw new Meteor.Error(500, "Internal Server Error");
    }
  },
  getPhone : function(){
        return process.env.XPRESS_PLUSS_PHONE;
  }
});

