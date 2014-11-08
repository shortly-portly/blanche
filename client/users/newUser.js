var validateUser = function(data) {
  var errors = [];
  if (!data.email) {
    errors.push("please enter an email address");
  }

  if (!data.password) {
    errors.push("please enter a password");
  }

  if (!data.profile.firstName) {
    errors.push("please enter a first name");
  }

  if (!data.profile.surname) {
    errors.push("please enter a surname");
  }

  return errors;
};

var createReview = function(user) {


  var satisfaction = {
    work: 0,
    money: 0,
    health: 0,
    Family: 0,
    Fun: 0
  };

  Reviews.insert({
    user: user,
    balance: 50,
    stress: 'never',
    satisfaction: satisfaction,
    status: "open"
  });
};



Template.newUser.helpers({
  createReview: function() {
    console.log("Created Review");
  }
});

Template.newUser.events({
  'click .createUser': function(evt, template) {
    event.preventDefault();
    var errors = [];

    data = {
      email: template.find("input[name=email]").value,
      password: template.find("input[name=password]").value,
      profile: {
        firstName: template.find("input[name=firstName]").value,
        surname: template.find("input[name=surname]").value,
        role: template.find("input[name=role]").checked
      }
    };

    errors = validateUser(data);


    if (data.role) {
      data.role = "admin";
    } else {
      data.role = "";
    }

    if (errors.length > 0) {
      FlashMessages.sendError(errors);
      return;
    } else {
      Meteor.call('createServerUser', data, function(error, result) {
        if (error) {
          FlashMessages.sendError("Error in creating user");
        } else {
          createReview(result);
        }
      });
    }

    FlashMessages.sendInfo("User Created");

  }
});
