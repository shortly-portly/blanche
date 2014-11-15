Template.stress.helpers({
  isActive: function(value) {
    if (value == this.stress) {
      return true;
    } else {
      return false;
    }
  },

  disabled: function() {

    if (this.status === "closed") {
      return "disabled";
    } else {
      return;
    }
  }
});
