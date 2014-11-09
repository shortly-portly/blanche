Template.roles.rendered = function() {
  console.log("setting roles in session");
  console.log(this.data);
  Session.set("roles", this.data);
};
