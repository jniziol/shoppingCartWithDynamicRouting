import React from 'react';
import './App.css';
import Item from './Item';
import Cart from './Cart'
import {Route, Link} from 'react-router-dom';

class Store extends React.Component {

  state = {
    cart: []
  }

  items = [
    {
      name: "Garden Tools #1",
      price: 4.99,
      description: "Makes your garden beautiful",
      image: "/images/1.jpg",
      id: 1,
    },
    {
      name: "Garden Tools #2",
      price: 5.99,
      description: "Makes your garden beautiful",
      image: "/images/2.jpg",
      id: 2,
    },
    {
      name: "Garden Tools 3#",
      price: 6.99,
      description: "Makes your garden beautiful",
      image: "/images/3.jpg",
      id: 3,
    },
    {
      name: "Garden Tools #4",
      price: 7.99,
      description: "Makes your garden beautiful",
      image: "/images/4.jpg",
      id: 4,
    },
    {
      name: "Garden Tools #5",
      price: 8.99,
      description: "Makes your garden beautiful",
      image: "/images/5.jpg",
      id: 5,
    }
  ]

  addToCart = (item) => {
    this.setState(currentState => ({
      cart: [...currentState.cart, {...item}]
    }))
  }

  removeFromCart = (item) => {
    this.setState(currentState => ({
      cart: currentState.cart.filter(i => i !== item)
    }))
  }

  render() {

    return (
      <>
        <Route exact path="/" render={() => (
          <>
            <Link to="/cart">
              <div>
                <img src="/images/shoppingCart.svg"/>
                You have {this.state.cart.length} items in your shopping cart!
              </div>
            </Link>
            {this.items.map(item => (
              <Link to={"/item/" + item.id}>
                <img src={item.image} />
                <div>Name:<span>{item.name}</span></div>
              </Link>
            ))}
          </>
        )} />

        <Route path="/item/:id" render={(routerVar) => (
          <Item addToCart={this.addToCart} item={this.items.find(i => i.id == routerVar.match.params.id)} />
        )} />

        <Route path="/cart" render={() => (
          <Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
        )}/>
      </>
    )
  }
}
export default Store;
