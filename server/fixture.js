if ( Meteor.users.find().count() === 0 ) {
    var id = Accounts.createUser({
        username: 'blanche',
        email: 'blanche@email.com',
        password: 'blanche',
        profile: {
            firstName: 'Blanche',
            surname: 'Simmons',
            role: "admin"
        }


    });

/*    var data = {
      roles: "",
      pastYear: "",
      liked: "",
      disliked: "",
      describe: ["","","","",""],
      time: 50,
      stress: "Never",
      satisfaction: {
        "Work": 0,
        "Fun": 0,
        "Money": 0,
        "Friends": 0,
        "Health": 0
      },
      skill:{

        "Organisation": 0,
        "Initiative": 0,
        "Accuracy": 0,
        "Creativity": 0,
        "Flexibility": 0,
        "Solving": 0
      }
    }; */





    var questions = [
      {
        name: "roles",
        question: "A1",
        text: "What are your main roles and responsibilities",
        type: "textArea",
        default: ""
      },
      {
        name: "pastYear",
        question: "A2",
        text: "How has the past year been for you at <i>+3 Architecture</i> generally",
        type: "textArea",
        default: ""
      },
      {
        name: "liked",
        question: "A3",
        text: "<strong>Please choose a maximum of five words</strong> to describe what have yo liked about working for <i>+3 Architecture</i> over the last year? If unknown please leave blank.",
        type: "words",
        max: 5,
        default: ""
      },
      {
        name: "disliked",
        question: "A4",
        text: "<strong>Please choose a maximum of five words</strong> to describe what have yo liked about working for <i>+3 Architecture</i> over the last year? If unknown please leave blank.",
        type: "words",
        max: 5,
        default: ["", "", "", "", ""]
      },

      {
        name: "time",
        question: "A5",
        text: "Are you given enough time to complete tasks well? <strong>Use the slider to indicate your view.</strong>",
        type: "slide",
        low: "Not enough",
        mid: "About right",
        high: "Plenty of time",
        default: 50
      },
      {
        name: "highlights",
        question: "A6",
        text: "<strong>Describe</strong> any professional highlights of the last year?",
        type: "textArea",
        default: ""
      },
      {
        name: "lowlights",
        question: "A7",
        text: "<strong>Describe</strong> any professional lowlights of the last year?",
        type: "textArea",
        default: ""
      },
      {
        name: "interesting",
        question: "A8",
        text: "What have you found <strong>interesting</strong> about your job over the last year?",
        type: "textArea",
        default: ""
      },
      {
        name: "challenging",
        question: "A9",
        text: "What have you found <strong>challenging</strong> about your job in the last year? (This can be in both a good or bad sense)",
        type: "textArea",
        default: ""
      },
      {
        name: "satisfaction",
        question: "A10",
        text: "Please <strong>rate your satisfaction</strong> in relation to each of the categories below. 1 - Unsatisfied and 10 - Satisfied.",
        type: "radar",
        options: ["Work", "Fun/Recreation", "Money", "Friends & Family", "Health"],
        default: {
          "Work": 0,
          "Fun": 0,
          "Money": 0,
          "Family": 0,
          "Health" :0
        }
      },
      {
        name: "balance",
        question: "A11",
        text: "How would you rate your work - life balance? <strong>Use the slider to indicate your view</strong>",
        type: "slide",
        low: "Work",
        mid: "Happy medium",
        high: "Life",
        default: 50
      },
      {
        name: "stress",
        question: "A12",
        text: "How often do you find yourself under stress at work? <strong>Please select where appropriate</strong>",
        type: "radio",
        options: [
          {
            optionName: "Daily",
            text: "Daily"
          },
          {
            optionName: "Weekly",
            text: "Weekly"
          },
          {
            optionName: "Monthly",
            text: "Monthly"
          },
          {
            optionName: "Annually",
            text: "Annually"
          },
          {
            optionName: "Never",
            text: "Never"
          }
        ],
        default: "Never"

      },
      {
        name: "skill",
        question: "B1",
        text: "Read the definition below and then <strong>please rate your skill level</strong> in relation to each." +
              "<strong>Please click where appropriate.</strong> 1 = Poor, 10 = excellent.<br>" +
              "<small>Self Organisation/meeting deadlines<br>" +
              "Prioritises effectively to meet deadlines, turns around work in a timely fashion.<br>" +
              "Initiative<br>" +
              "Displays initiative, enthusiasm and commitment, upholds firm's culture and values.<br>" +
              "Accuracy<br>" +
              "Approaches tasks with a desire for perfection, output is accurate and precise.<br>" +
              "Creativity<br>" +
              "Displays a creative approach to projects and challenges.<br>" +
              "Flexibility<br>" +
              "Display flexibility when confronted with new challenges.<br>" +
              "Problem Solving<br>" +
              "Displays an apptitude for problem solving, approaches new challenges with an open mind.</small>",
        type: "radar",
        options: ["Self Organisation", "Initiative", "Accuracy", "Creativity", "Flexibility", "Problem Solving"],
        default: {

          "Organisation": 0,
          "Initiative": 0,
          "Accuracy": 0,
          "Creativity": 0,
          "Flexibility": 0,
          "Solving": 0
        }
      },


          ];

    var data = {};

    _.each(questions, function(question) {
      Questions.insert(question);
      data[question.name] = question.default;
    });

    Reviews.insert({
      user: id,
      data: data,
      status: "open"});


}
