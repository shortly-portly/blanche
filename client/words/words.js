Template.words.helpers ({
  value: function(name, index) {
    var answer = Reviews.findOne({_id: Session.get('reviewId')});
    var words = answer.data[name];

    if (words && words[index]) {
      return words[index];
    }
  },
  mode: function() {
    if (Session.get('mode') == 'view') {
      return 'readonly';
    }
  }

});
