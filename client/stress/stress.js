Template.stress.helpers({
  isActive: function(value) {
    if (value == this.stress) {
      return true;
    } else {
      return false;
    }
  },

  disabled: function() {
    console.log("value of stess is...");
    console.log(this.status);
    if (this.status === "closed") {
      return "disabled";
    } else {
      return;
    }
  }
});
