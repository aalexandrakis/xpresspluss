Reservations = new Mongo.Collection("reservations");

Reservations.allow({
    'insert': function (userId , doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    }
});

Meteor.publish("reservations", function () {
    return Reservations.find();
});