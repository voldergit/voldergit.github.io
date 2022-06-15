const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    // console.table(this.items);
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return
      }
      
    }
    const newProduct = {...product, quantity: 1}
    this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (productName === item.name) {
        console.log(`Bingo the`, productName);
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    console.log(this.items)
    let total = 0;
    for (const item of this.items) {
      total += item.price*item.quantity
    }
    return total;
  },
  increaseQuantity(productName) { },
  decreaseQuantity() { },
};

// console.log(cart.getItems())

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'cherry', price: 70 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'peach', price: 110 });
cart.add({ name: 'peach', price: 110 });
cart.add({ name: 'peach', price: 110 });


console.table(cart.getItems());

cart.countTotalPrice()
console.log(`Total: `, cart.countTotalPrice())

// cart.remove('lemon')
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems())



