if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'blanche',
        email: 'blanche@email.com',
        password: 'blanche',
        profile: {
            first_name: 'fname',
            last_name: 'lname',
            company: 'company',
        }
    });
}
