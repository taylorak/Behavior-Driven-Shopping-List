var ShoppingListItem = function(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;
}

ShoppingListItem.prototype.check = function() {
  this.is_done = true;
}

ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;
}

ShoppingListItem.prototype.render = function() {
  var html_content =  '<ul><li id="completed_' + this.is_done + '">' +
      '<span>' + this.name + '</span><span>' + this.description + '</span>' +
      '</li></ul>';
  return html_content;
}