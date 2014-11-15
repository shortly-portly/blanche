var collectDataFns = {
  textArea: function(template, data) {
    var selector = "textarea[name=" + data.name + "]";
    return template.find(selector).value;
  },
  words: function(template, data) {
    var description = [];
    for (i=0; i<5; i++) {
      find = "input[name=" + data.name + i + "]";
      description[i] = template.find(find).value;
    }

    return description;
  },
  slide: function(template, data) {
    return $('.' + data.name).val();
  },
  radio: function(template, data) {
    var selector = "input[name=" + data.name + "]:checked";
    return template.find(selector).value;
  },
  radar: function(template, data) {

    console.log("Radar Template....");
    console.log(template);
    console.log("Radar data");
    console.log(data);
    wibble = data.radar.getData();


    var satisfaction = [];
    var satisfactionData = {};

  _.each(wibble.datasets[0].points, function(point) {
    satisfaction.push(point.value);
  });




    return satisfaction;
  }
};

var collectData = function(template) {


/* db.test.find({field:"blabla"}).forEach(function(obj){print(obj.fieldname)}) */

    var data = {};
    template.data.questions.forEach(function(question) {
      console.log(question);
      data[question.name] = collectDataFns[question.type](template, question);
    });

    console.log("Result of calling all those question functions is.....");
    console.log(data);

  /* _.each(template.data.questions, function(question){
    console.log("question....");
    console.log(question);
    console.log("question.type..." + question.type);
    question.value = collectDataFns[question.type](template, question);
    data.push(question);

  }); */
  return data;
};


Template.editPerformance2.events ({
  'click .saveReview': function(evt, template) {
    evt.preventDefault();


    var data = collectData(template);
    var answers = {};
    _.each(data, function(q) {
      answers[q.name] = q.value;
    });


    Reviews.update(this.review._id, {$set: {"data": answers, "status": "open"}});
    console.log("finished saving data");
    console.log(template.data.questions);
    /* FlashMessages.sendInfo("Review Saved"); */

  },
/*
  'click .submitReview': function(evt, template) {

    var data = collectData(template);

    data.status = "closed";

    Reviews.update(this._id, {$set: data});
    FlashMessages.sendInfo("Review Submitted");
    Router.go('home');

  } */
});
