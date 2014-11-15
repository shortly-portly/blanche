Template.dummy.rendered = function () {
  console.log("Template.dummy.rendered with data of...");
  console.log(this.data);
  console.log("and parent data of....");
  console.log(Template.parentData(1).data);


};
