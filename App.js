 
import './App.css';

import React, { Component } from 'react'
import Products from './components/Products'
import axios from 'axios';
 
class App extends Component {

  state = {
    products: [],
    ps:false
  }
  
  productShow = (e) => {
    this.setState({ ps: true });
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      res => this.setState({products:res.data})
    )
  }

  render() {

    var productMarkup = '';
    if (this.state.ps === true) {
      productMarkup = <Products items={ this.state.products } />
    }

     return (
        <div> 
         <button onClick={this.productShow}>Show Product</button>
         { productMarkup }
        </div>
     )
   }
}
export default App;
 
