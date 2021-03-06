Template.driverLogin.events({
    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value
        , password = t.find('#login-password').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
        if (err) {
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed.
          t.find('#alert').className = "alert alert-danger";
          t.find('#alert-message').innerHTML = err.reason;
        } else {
          // The user has been logged in.
          t.find('#alert').className = "alert alert-success";
          t.find('#alert-message').innerHTML = "Welcome";
          Router.go('/viewReservations')
        }
      });
         return false;
      }
  });