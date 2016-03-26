var ShoppingList = function() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(shoppingListItem) {
  validate(shoppingListItem);
  this.items.push(shoppingListItem);
}

ShoppingList.prototype.removeItem = function(shoppingListItem) {
  if(arguments.length === 0) {
    this.items.pop();
  } else {
    validate(shoppingListItem);
    var index = this.items.indexOf(shoppingListItem);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }
}

ShoppingList.prototype.render = function() {
  var html_content = '<ul id="shoppingList">'
  for(var i = 0; i < this.items.length; i++) {
    html_content += this.items[i].render();
  }
  html_content += '</ul>'
  return html_content;
}

function validate(shoppingListItem) {
  if(!(shoppingListItem instanceof ShoppingListItem)) {
    throw new TypeError('Not an instance of ShoppingListItem');
  }
}