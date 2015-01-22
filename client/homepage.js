var phone = "+306948211181";
Template.homepage.helpers({
    "phone" : function(){
        return phone;
    }
});

Template.homepage.events({
    "mouseover #callNumber" : function(e, t){
        t.find("#callNumber").className="timeline-badge success";
    },
    "mouseout #callNumber" : function(e, t){
        t.find("#callNumber").className="timeline-badge primary";
    }
});

