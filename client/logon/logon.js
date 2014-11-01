Template.logon.events({
  'click .logon': function(evt, template) {
      event.preventDefault();

      var email = template.find("input[name=email]");
      console.log(email.value);

      var password = template.find("input[name=password]");
      console.log(password.value);

      Meteor.loginWithPassword(email.value, password.value, function(error) {
        if (error) {
          console.log(error);
        } else {
          Router.go('admin');
        }
      });
  }

});
