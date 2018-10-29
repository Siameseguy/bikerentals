import React from 'react'

function Cart(props) {
  return (
    <div className="cart">
      <button className="btn btn-success btn-lg btn-block">total: ${props.total}</button>
    </div>
  )
}

export default Cart
