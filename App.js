import React, { Component } from 'react'

import './App.css';
import Header from './components/Header';
import Products from './components/Products';
 




class App extends Component {
  state = {
    category: "E-commerce",
    products: [
      {
        id: 1,
        name: 'T-shirt',
      },
      {
        id: 2,
        name: 'T-shirt-2',
      },
      {
        id: 3,
        name: 'T-shirt-3',
      }
    ],
    inputText: '',
    sp:false,
     
  }

  // testHandle = (e) => {
  //   this.setState({ inputText: e.target.value });
  //   console.log(this.state.inputText);
  // }

  showProducts = (e) => {
    this.setState({ sp: true }); 
  }

  render() {

    var showProductM = '';
    if (this.state.sp === true) {
      showProductM = <Products items={this.state.products} />
    }

    return (
      <div><Header/>
         
         
        <button onClick={this.showProducts}>Show Product</button>
        {showProductM}
      </div>
    )
  }
}
export default App;
