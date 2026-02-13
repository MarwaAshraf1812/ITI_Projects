var db = idb.open('furniture-db', 1, dbBuilder=> {
  if(!dbBuilder.objectStoreNames.contains('orders')) {
    dbBuilder.createObjectStore('orders', {keyPath: 'id'});
  }

  if(!dbBuilder.objectStoreNames.contains('products')) {
    dbBuilder.createObjectStore('products', {keyPath: 'id'});
    productStore.createIndex('name', 'name', { unique: true });
  }
})


function addProductsToStore() {
  var items = [
    { name: 'Cabinet', id: 'ca-brn-ma', price: 799.99, color: 'brown' },
    { name: 'Armchair', id: 'ac-gr-pin', price: 299.99, color: 'grey' },
    { name: 'Couch', id: 'cch-blk-ma', price: 499.99, color: 'black' }
  ];

  db.then(mydb=> {
    var tx = mydb.transaction('products', 'readwrite');
    var store = tx.objectStore('products');

    items.forEach(item=> {
      store.put(item);
    })

    return tx.complete;
  }).then(() => {
    console.log('Products added successfully!');
  }).catch(err => onsole.error('Error adding products:', err))
}


