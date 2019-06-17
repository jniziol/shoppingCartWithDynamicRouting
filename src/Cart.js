import React from 'react'
import {Link} from 'react-router-dom'

export default class Cart extends React.Component {

  render() {
    return (
      <>
        <Link to="/">Continue Shopping</Link>
        {this.props.cart.map(item => (
          <div>
            <img src={item.image} />
            <div>Price: <span>{item.price}</span></div>
            <button onClick={() => this.props.removeFromCart(item)}>Remove from Cart</button>
          </div>
        ))}
        SubTotal: {this.props.cart.reduce((acc, item) => {
          return acc + item.price;
        }, 0)}
      </>
    )
  }

}