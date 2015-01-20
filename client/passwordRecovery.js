Template.passwordRecovery.helpers({
    resetPassword : function(t) {
      return Session.get('resetPassword');
    }
});

if (Accounts._resetPasswordToken) {
    Session.set('resetPassword', Accounts._resetPasswordToken);
}

Template.passwordRecovery.events({
     'submit #recovery-form' : function(e, t) {
        e.preventDefault()
        var email = t.find('#recovery-email').value

        if (email != "") {
          Session.set('loading', true);
          Accounts.forgotPassword({email: email}, function(err){
              if (err) {
                t.find('#alert').className = "alert alert-danger";
                t.find('#alert-message').innerHTML = 'Password Recovery Error. ' + err.reason;
              } else {
                t.find('#alert').className = "alert alert-success";
                t.find('#alert-message').innerHTML = 'Email Sent. Please check your email.';
              }
              Session.set('loading', false);
          });
        }
        return false;
      },

      'submit #new-password' : function(e, t) {
        e.preventDefault();
        var pw = t.find('#new-password-password').value;
        if (isNotEmpty(pw) && isValidPassword(pw)) {
          Session.set('loading', true);
          Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
            if (err) {
              t.find('#alert').className = "alert alert-danger";
              t.find('#alert-message').innerHTML = 'Password Reset Error. ' + err.reason;
            }
            Session.set('loading', false);
          });
        }
      return false;
      }
});