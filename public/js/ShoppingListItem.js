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
  var html_content =  '<li><div class="checkboxDiv"><input type="checkbox" class="checkable"'
   if(this.is_done) {
    html_content += ' checked';
   }
   html_content += '></div><div class="infoDiv"><span>' + this.name + '</span><br><span class="thinFont">' + this.description + '</span></div>' +
      '<div class="removeDiv"><button class="removeButton" type="button">Remove</button></div></li>';
  return html_content;
}