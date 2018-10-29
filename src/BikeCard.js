import React from 'react'

function BikeCard(props) {
  let bicycle = props.bikes
  return (
    <div className="card">
      <img src={bicycle.image} alt={bicycle.name}/>
      <div className="card-body">
        <h5 className="card-title">{bicycle.name}</h5>
        <p className="card-text">${bicycle.price}</p>
        <button className="btn btn-primary" onClick={() => props.func(bicycle.price)}>Reserve</button>
      </div>
    </div>
  )
}

export default BikeCard
