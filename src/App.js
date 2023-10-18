import React from 'react'
import { getProducts } from './shop/components/product/api';
import Product from './shop/components/product/ui';
import './App.css';

class App extends React.Component {
  render () {
    const products = getProducts()
    
    return(
      <div className='App'>
        <h1>Product List</h1>
        <div className='product-list'>
          {products.map((product) => (
            <Product key={product.id} productObject={product} />
          ))}
        </div>

      </div>
    )
  }
}

export default App;
