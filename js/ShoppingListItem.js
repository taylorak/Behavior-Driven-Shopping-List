var ShoppingListItem = function(name, description) {
  if(typeof name !== 'string' || typeof description !== 'string') {
    throw new TypeError('Not a string');
  }
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
  var html_content =  '<li id="completed_' + this.is_done + '"><input type="checkbox" class="checkable"'
   if(this.is_done) {
    html_content += ' checked';
   }
   html_content += '><span>' + this.name + '</span> <span>' + this.description + '</span>' +
      '</li>';
  return html_content;
}