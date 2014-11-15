Template.textArea.helpers({
  value: function(name) {
    var answer = Reviews.findOne({user: Meteor.userId()});
    console.log("text area called");
    console.log(answer);
    return answer.data[name];
  }
});
