const ProductsDiscount = {};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  setDiscount(discount) {
    ProductsDiscount[this.name] = discount;
  }
  
  getDiscount() {
    return `Скидка на ${this.name} составляет ${ProductsDiscount[this.name]}%`;
  }
  
  deleteProduct() {
    delete ProductsDiscount[this.name];
    this.name = undefined;
    this.price = undefined;
  }
}

const orange = new Product('orange', 100);
const apple = new Product('apple', 50);

orange.setDiscount(20);
apple.setDiscount(10);
console.log(orange.getDiscount());
console.log(apple.getDiscount());
console.log(ProductsDiscount);
orange.deleteProduct();
console.log(ProductsDiscount);