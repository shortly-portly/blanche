Template.editUser.rendered = function() {
  console.log("editUser rendered");
  console.log(this.data);
};



Template.editUser.helpers ({
userEmail: function() {
  return this.emails[0].address;
}
});
