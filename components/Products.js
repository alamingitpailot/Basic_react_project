import React, { Component } from 'react'

 class Products extends Component {
    render() {
        return this.props.items.map((product) => (
          <li key={ product.id}>{ product.title }</li>
        ))
    }
} 
export default Products;
