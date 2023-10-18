import Product from "./Product";

const product1 = new Product(1, "CD", 15.99)
const product2 = new Product(2, "Headphones", 45.99)
const product3 = new Product(3, "Boom Box", 325.99)

function getProducts() {
  return [product1, product2, product3]
}

export {getProducts}