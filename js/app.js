(function() {
  var shoppingList = new ShoppingList();
  var html_output = shoppingList.render();

  var content = document.querySelector('#content');
  content.innerHTML = html_output;

  var addToShoppingList = function() {
    var name = document.querySelector('#name');
    var description = document.querySelector('#description');
    if(name.value !== '' &&  description.value !== '') {
      var newShoppingListItem = new ShoppingListItem(name.value, description.value);
      shoppingList.addItem(newShoppingListItem);
      name.value = '';
      description.value = '';
      content.innerHTML = shoppingList.render();
    }
  }

  var changeCheckedStatus = function(idx, checkbox) {
    if(checkbox.checked) {
      checkbox.checked = true;
      shoppingList.items[idx].check();
    } else {
      checkbox.checked = false;
      shoppingList.items[idx].uncheck();
    }
  }

  content.addEventListener('click', function(event) {
    var listElement = event.target.parentNode;
    if(event.target.classList.contains('checkable')) {
      var idx = Array.prototype.indexOf.call(listElement.parentNode.childNodes, listElement);
      changeCheckedStatus(idx, event.target);
    } else if(event.target.classList.contains('removeButton')) {
      console.log('remove');
    }
  })

  var addToShoppingListButton = document.querySelector('#addToShoppingListButton');
  addToShoppingListButton.addEventListener('click', function() {
    addToShoppingList();
  })


})()