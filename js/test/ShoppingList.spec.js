describe('Shopping List Item', function() {
  var shoppingListItem;

  beforeEach(function() {
    shoppingListItem = new ShoppingListItem('Avacado', 'Must be eaten immediately');
  })

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  })

  it('should be an object', function() {
    expect(shoppingListItem).to.be.an('object');
  })

  describe('Shopping List Item Properties', function() {

    it('should initalize name and description with arguments passed in', function() {
      expect(shoppingListItem.name).to.equal('Avacado');
      expect(shoppingListItem.description).to.equal('Must be eaten immediately');
      expect(shoppingListItem.is_done).to.be.false;
    })

    describe('name', function() {
      it('should exist on ShoppingListItem', function() {
        expect(shoppingListItem).to.have.property('name');
      })
    })

    describe('description', function() {
      it('should exist on ShoppingListItem', function() {
        expect(shoppingListItem).to.have.property('description');
      })
    })

    describe('is_done', function() {
      it('should exist on ShoppingListItem', function() {
        expect(shoppingListItem).to.have.property('is_done');
      })
    })

  })

  describe('Shopping List Item Methods', function() {
    describe('check', function() {
      it('should have a method named check', function() {
        expect(shoppingListItem.check).to.exist;
      })

      it('should set is_done property to true', function() {
        shoppingListItem.check();
        expect(shoppingListItem.is_done).to.be.true;
      })
    })
    describe('uncheck', function() {
      it('should have a method named uncheck', function() {
        expect(shoppingListItem.uncheck).to.exist;
      })

      it('should set is_done property to false', function() {
        shoppingListItem.uncheck();
        expect(shoppingListItem.is_done).to.be.false;
      })
    })
    describe('render', function() {
      it('should have a method named render', function() {
        expect(shoppingListItem.render).to.exist;
      })

      it('should construct and return an html formatted string', function() {
          var html_content =  '<ul><li id="completed_false"><span>Avacado</span>' +
              '<span>Must be eaten immediately</span></li></ul>';
        var html_output = shoppingListItem.render();
        expect(html_output).to.be.a('string');
        expect(html_output).to.equal(html_content)
      })
    })
  })


})

describe('Shopping List', function() {
  it('should be a class', function() {
    expect(ShoppingList).to.be.a('function');
  })
})