Template.Layout.events({
    "click #logOut" : function(event, template){
        Meteor.logout();
    }
});