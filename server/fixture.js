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

    var data = {
      roles: "",
      pastYear: "",
      describe: ["","","","",""],
      time: 50,
      stress: "Never",
      satisfaction: {
        "Work": 0,
        "Fun": 0,
        "Money": 0,
        "Friends": 0,
        "Health": 0
      }
    };



    Reviews.insert({
      user: id,
      data: data,
      status: "open"});


    var questions = [
      {
        name: "roles",
        question: "A1",
        text: "What are your main roles and responsibilities",
        type: "textArea"
      },
      {
        name: "pastYear",
        question: "A2",
        text: "How has the past year been for you at <i>+3 Architecture</i> generally",
        type: "textArea",
      },
      {
        name: "describe",
        question: "A3",
        text: "<strong>Please choose a maximum of five words</strong> to describe what have yo liked about working for <i>+3 Architecture</i> over the last year? If unknown please leave blank.",
        type: "words",
        max: 5
      },
      {
        name: "time",
        question: "A5",
        text: "Are you given enough time to complete tasks well? <strong>Use the slider to indicate your view.</strong>",
        type: "slide",
        low: "Not enough",
        mid: "About right",
        high: "Plenty of time"
      },
      {
        name: "stress",
        question: "A11",
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
        ]
      },
      {
        name: "satisfaction",
        question: "A10",
        text: "Please <strong>rate your satisfaction</strong> in relation to each of the categories below. 1 - Unsatisfied and 10 - Satisfied.",
        type: "radar",
        options: ["Work", "Fun/Recreation", "Money", "Friends & Family", "Health"]
      }
    ];

    _.each(questions, function(question) {
      Questions.insert(question);
    });

}
