Reservations = new Mongo.Collection("reservations");

Reservations.allow({
    'insert': function (userId , doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    },
    'update': function (userId , doc) {
          /* user and doc checks ,
          return true to allow insert */
          return true;
    }
});

Meteor.publish("reservations", function (selector) {
    currentUser = Meteor.users.findOne({ _id : this.userId});
    if (currentUser && currentUser.role == "driver"){
        if (selector == "unconfirmed"){
            return Reservations.find({confirmed : false, canceled: false});
        } else if (selector == "confirmed"){
            return Reservations.find({confirmed : true, closed: false, canceled: false});
        } else if (selector == "closed"){
            return Reservations.find({confirmed : true, closed: true, canceled: false});
        } else if (selector == "canceled"){
            return Reservations.find({canceled : true});
        }
        this.ready();
    }
});