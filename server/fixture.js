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

    var satisfaction = {
      work: 0,
      money: 0,
      health: 0,
      Family: 0,
      Fun: 0
    };

    Reviews.insert({
      user: id,
      balance: 50,
      stress: 'never',
      satisfaction: satisfaction,
      status: "open"
    });
}
