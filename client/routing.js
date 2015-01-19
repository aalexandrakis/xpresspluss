//Router.configure({
//  layoutTemplate:'layout'
//});
//
//Router.map(function(){
//  this.route('homepage', {path : '/'});
//  this.route('onlineReservation');
//  this.route('login');
//  this.route('viewReservations');
//});

Router.route('/', function () {
  this.layout('Layout');
  this.render('Homepage');
});
Router.route('/homepage', function () {
  this.layout('Layout');
  this.render('Homepage');
});
Router.route("/onlineReservation", function(){
  this.layout('Layout');
  this.render("OnlineReservation");
});
Router.route("/login", function(){
  this.layout('Layout');
  this.render("Login");
});
Router.route("/viewReservations", function(){
  this.layout('Layout');
  this.render("ViewReservations");
});
