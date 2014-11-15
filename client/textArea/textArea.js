Template.textArea.helpers({
  value: function(name) {
    var answer = Reviews.findOne({user: Meteor.userId()});
    return answer.data[name];
  }
});
