Reservations = new Mongo.Collection("reservations");
Meteor.subscribe("reservations");
Template.viewReservations.helpers({
    "Reservations" : function(){
        x = [{
                   "_id" : "TLDcdGtKTZwA6TN4M",
                   "dateTime" : "19-01-2015 00:39",
                   "phone" : "6948211181",
                   "email" : "aalexandrakis@hotmail.com",
                   "from" : "zografou",
                   "to" : "athens",
                   "confirmed" : false,
                   "open" : true
               }];
//       return x;
         return Reservations.find();
    }
});

