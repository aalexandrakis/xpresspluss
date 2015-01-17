Router.configure({
  layoutTemplate:'layout'
});

Router.map(function(){
  this.route('homepage', {path : '/'});
  this.route('onlineReservation');
  this.route('login');
});
