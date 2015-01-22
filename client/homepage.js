var phone = "6948211181";
Template.homepage.helpers({
    "phone" : function(){
        return phone;
    }
});

Template.callNumberButton.events({
    "mouseover #callNumber" : function(e, t){
        t.find("#callNumber").className="timeline-badge success";
    },
    "mouseout #callNumber" : function(e, t){
        t.find("#callNumber").className="timeline-badge primary";
    },
    "click #callNumber" : function(e, t){
        window.plugins.CallNumber.callNumber(onSuccess, onError, number);
    }
});

onSuccess = function(){
    console.log("ok");
}


onError = function(error){
    console.log(error);
    window.alert(error);
}
