Template.textArea.helpers({
  value: function(name) {
    var answer = Reviews.findOne({_id: Session.get('reviewId')});
    return answer.data[name];
  },
  mode: function() {
    if (Session.get('mode') == 'view') {
      return 'readonly';
    }
  }
});
