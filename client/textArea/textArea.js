Template.textArea.helpers({
  value: function(name) {


    console.log("Text areas value of session review id");
    console.log(Session.get('reviewId'));
    var answer = Reviews.findOne({_id: Session.get('reviewId')});



    return answer.data[name];
  },
  mode: function() {
    if (Session.get('mode') == 'view') {
      return 'readonly';
    }
  }
});
