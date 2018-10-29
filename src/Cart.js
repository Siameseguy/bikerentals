import React from 'react'

function Cart(props) {
  return (
    <div className="cart col-xs-12 col-md-4">
      <div className="cart-items">
        <button className="btn btn-success btn-lg btn-block">total: ${props.total}</button>
      </div>
    </div>
  )
}

export default Cart
