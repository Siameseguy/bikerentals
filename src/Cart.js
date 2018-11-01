import React from 'react'

function Cart(props) {
  return (
    <div className="cart col-xs-12 col-md-4">
      <div className="cart-items">
        <div className="list-items">
          <p>Your reservation</p>
          <ul>
            {props
              .reserved
              .map((item, index) => {
                let count = 0;
                return (

                  <li className="list-unstyled" key={index}>{item === item
                      ? item + count++
                      : item
}</li>
                )
              })
}
          </ul>
        </div>
        <button className="btn btn-success btn-lg btn-block">Book Now &ndash; ${props.total}</button>
      </div>
    </div>
  )
}

export default Cart
