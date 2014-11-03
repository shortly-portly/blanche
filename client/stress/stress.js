Template.stress.helpers({
  isActive: function(value) {
    if (value == this.stress) {
      return true;
    } else {
      return false;
    }
  }
});
