Reservations = new Mongo.Collection("reservations");

Reservations.allow({
    'insert': function (userId , doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    }
});

Meteor.publish("reservations", function (selector) {
    currentUser = Meteor.users.findOne({ _id : this.userId});
    if (currentUser && currentUser.role == "driver"){
        if (selector == "unconfirmed"){
            return Reservations.find({confirmed : false});
        } else if (selector == "confirmed"){
            return Reservations.find({confirmed : true, open: true});
        } else if (selector == "closed"){
            return Reservations.find({confirmed : true, open: false});
        }

    }
});