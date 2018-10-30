import React from 'react'

function BikeCard(props) {
  let bicycle = props.bikes
  return (
    <div className="card col-xs-12 col-md-4">
      <img src={bicycle.image} alt={bicycle.name}/>
      <div className="card-body">
        <h5 className="card-title">{bicycle.name}</h5>
        <p className="card-text">${bicycle.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => props.runFunctions(bicycle.price, bicycle.name)}>Add to Reservation</button>
      </div>
    </div>
  )
}

export default BikeCard
