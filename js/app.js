(function() {
  var shoppingList = new ShoppingList();
  var html_output = shoppingList.render();

  var content = document.querySelector('#content');
  content.innerHTML = html_output;

  var addToShoppingList = function() {
    var name = document.querySelector('#name');
    var description = document.querySelector('#description');
    if(name.value !== '' ||  description.value !== '') {
      var newShoppingListItem = new ShoppingListItem(name.value, description.value);
      shoppingList.addItem(newShoppingListItem);
      name.value = '';
      description.value = '';
      content.innerHTML = shoppingList.render();
    }
  }

  var addToShoppingListButton = document.querySelector('#addToShoppingListButton');
  addToShoppingListButton.addEventListener('click', function() {
    addToShoppingList();
  })

})()