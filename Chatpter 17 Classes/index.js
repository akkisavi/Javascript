class Product{
    constructor(product, price){
        this.product = product,
        this.price = price
    }

    displayProduct(){
        console.log(`Product: ${this.product}`)
        console.log(`Price: Rs${this.price.toFixed(2)}`)
    }

    calculateTotal(salesTax){
        return this.price+(this.price * salesTax);
    }

}

const salesTax = 0.10;

const product1 = new Product("Shirt", 199);
const product2 = new Product("Pant", 299);
const product3 = new Product("Jacket", 1999);

product3.displayProduct();

const Total = product3.calculateTotal(salesTax);
console.log(`The total price of product with tax is Rs${Total}`)