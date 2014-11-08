Template.home.helpers({
  open: function() {
    if (this.status === "open") {
      return true;
    } else {
      return false;
    }
  }
});
