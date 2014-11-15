Template.question.helpers ({
  questionType: function() {

    var x =  Questions.findOne({name: this.name});
    
    return x.type;

  }
});

/* {{> Template.dynamic template=type}} */
