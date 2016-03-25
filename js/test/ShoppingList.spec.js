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
          var html_content =  '<ul><li id="completed_false"><span>Avacado</span> ' +
              '<span>Must be eaten immediately</span></li></ul>';
        var html_output = shoppingListItem.render();
        expect(html_output).to.be.a('string');
        expect(html_output).to.equal(html_content)
      })
    })
  })


})

describe('Shopping List', function() {
  var shoppingList;

  beforeEach(function() {
    shoppingList = new ShoppingList();
  })

  it('should be a function', function() {
    expect(ShoppingList).to.be.a('function');
  })

  it('should be an object', function() {
    expect(shoppingList).to.be.an('object');
  })

  describe('Shopping List Properties', function() {
    describe('items', function() {
      it('should have a property named items', function() {
          expect(shoppingList.items).to.exist;
      })

      it('should initialize an empty array', function() {
        expect(shoppingList.items).to.be.instanceof(Array);
        expect(shoppingList.items).to.be.empty;
      })
    })
  })

  describe('Shopping List Methods', function() {
    var apple;
    var banana;

    beforeEach(function() {
      apple = new ShoppingListItem('Apple', 'It is red');
      banana = new ShoppingListItem('Banana', 'It is yellow');
    })

    describe('addItem', function() {
      it('should exist on ShoppingList', function() {
        expect(shoppingList.addItem).to.exist;
        expect(shoppingList.addItem).to.be.a('function');
      })
      it('should throw an error when not passed a ShoppingListItem', function() {
        expect(shoppingList.addItem.bind(shoppingList, [])).to.throw(Error);
        expect(shoppingList.addItem.bind(shoppingList, {})).to.throw(Error);
        expect(shoppingList.addItem.bind(shoppingList, null)).to.throw(Error);
        expect(shoppingList.addItem.bind(shoppingList, undefined)).to.throw(Error);
        expect(shoppingList.addItem.bind(shoppingList, '')).to.throw(Error);
        expect(shoppingList.addItem.bind(shoppingList, 1)).to.throw(Error);
      })
      it('should add an item to items array', function() {
        shoppingList.addItem(apple);
        expect(shoppingList.items).to.have.length(1);
        expect(shoppingList.items[0]).to.equal(apple);
        shoppingList.addItem(banana);
        expect(shoppingList.items).to.have.length(2);
        expect(shoppingList.items[1]).to.equal(banana);
      })
    })

    describe('removeItem', function() {
      it('should exist on ShoppingList', function() {
        expect(shoppingList.removeItem).to.exist;
        expect(shoppingList.removeItem).to.be.a('function');
      })
      it('should throw an error when not passed a ShoppingListItem', function() {
        expect(shoppingList.removeItem.bind(shoppingList, [])).to.throw(Error);
        expect(shoppingList.removeItem.bind(shoppingList, {})).to.throw(Error);
        expect(shoppingList.removeItem.bind(shoppingList, null)).to.throw(Error);
        expect(shoppingList.removeItem.bind(shoppingList, undefined)).to.throw(Error);
        expect(shoppingList.removeItem.bind(shoppingList, '')).to.throw(Error);
        expect(shoppingList.removeItem.bind(shoppingList, 1)).to.throw(Error);
      })
      it('should remove an item from the items array', function() {
        shoppingList.addItem(apple);
        shoppingList.addItem(banana)
        shoppingList.removeItem(apple);
        expect(shoppingList.items).to.have.length(1);
        expect(shoppingList.items[0]).to.equal(banana);
      })
      it('should remove an item from end of array when no parameters', function() {
        shoppingList.addItem(apple);
        shoppingList.addItem(banana)
        shoppingList.removeItem();
        expect(shoppingList.items).to.have.length(1);
        expect(shoppingList.items[0]).to.equal(apple);
      })
    })

    describe('render', function() {
      it('should exist on ShoppingList', function() {
        expect(shoppingList.render).to.exist;
        expect(shoppingList.render).to.be.a('function');
      })

      it('should construct and render and html string', function() {
        shoppingList.addItem(apple);
        shoppingList.addItem(banana);
        var html_content = '<ul>' + apple.render() + banana.render() + '</ul>';
        var html_output = shoppingList.render();
        expect(html_output).to.be.a('string');
        expect(html_output).to.equal(html_content);
      })
    })

  }) // end of Shoppin List Method tests
}) // end of Shopping List test suite