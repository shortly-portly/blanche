Template.newUser.events({
    'click .createUser': function(evt, template) {
      event.preventDefault();
      var errors = [];
      var email = template.find("input[name=email]").value;
      var password = template.find("input[name=password]").value;
      var firstName = template.find("input[name=firstName]").value;
      var surname = template.find("input[name=surname]").value;
      var role = template.find("input[name=role]").checked;

      console.log(role);

      if (!email) {
        errors.push("please enter an email address");
      }

      if (!password) {
        errors.push("please enter a password");
      }

      if (!firstName) {
        errors.push("please enter a first name");
      }

      if (!surname) {
        errors.push("please enter a surname");
      }

      if (role) {
        role = "admin";
      } else {
        role = "";
      }

      if (errors.length > 0) {
        FlashMessages.sendError(errors);
        return;
      } else {
        var data = {

          email: email,
          password: password,
          profile: {
            first_name: firstName,
            last_name: surname,
            role: role
          }
        };
        Meteor.call('createServerUser', data);

        FlashMessages.sendInfo("User Created");
      }
    }

});
