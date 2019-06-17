import React from 'react';

const Item = (props) => {
  const {item} = props

  return (
    <div>
      <img src={item.image} />
      <div>Name:<span>{item.name}</span></div>
      <div>Price:<span>{item.price}</span></div>
      <div>Description:<span>{item.description}</span></div>
      <button onClick={() => props.addToCart(item)}>Add to Cart</button>
    </div>
  )
}

export default Item