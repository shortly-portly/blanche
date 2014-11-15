Template.words.helpers ({
  value: function(name, index) {
    var answer = Reviews.findOne({user: Meteor.userId()});
    var words = answer.data[name];
    
    if (words && words[index]) {
      return words[index];
    }
  }
});
