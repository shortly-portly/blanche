Template.radio.helpers({
  isActive: function(value) {
    
    var answer = Reviews.findOne({user: Meteor.userId()});
    var name = Template.parentData(1).name;

    if (value == answer.data[name]) {
      return true;
    } else {
      return false;
    }
  },

  disabled: function() {

    if (this.status === "closed") {
      return "disabled";
    } else {
      return;
    }
  },
  radioName: function() {
    return Template.parentData(1).name;
  }
});
