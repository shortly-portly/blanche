Template.pastYear.helpers({
  isActive: function(value) {
    if (value == this.pastYear) {
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
