import React, {Component} from 'react'
import axios from 'axios'

import BikeCard from './BikeCard'
import Cart from './Cart'

export default class Bikes extends Component {
  constructor() {
    super()
    this.state = {
      bicycles: [],
      reserved: [],
      total: 0
    }

  }

  addToTotal = (price) => {
    this.setState({
      total: this.state.total + price
    })
  }

  addToReserved = (item) => {
    this.setState({
      total: this
        .state
        .reserved
        .push(item)
    })
  }

  runFunctions = (price, item) => {
    this.addToReserved(item)
    this.addToTotal(price)
  }

  async componentDidMount() {
    try {
      let resp = await axios.get('../Bikes.json')
      this.setState({bicycles: resp.data.products})
    } catch (err) {
      console.log(err); // TypeError: failed
    }
  }

  render() {
    return (
      <div className="bicycles">
        <h1 className="title">Make Your Reservation</h1>
        <div className="row">
          {this
            .state
            .bicycles
            .map(bike => <BikeCard key={bike.id} bikes={bike} runFunctions={this.runFunctions}/>)
}
        </div>
        <Cart total={this.state.total} reserved={this.state.reserved}/>
      </div>
    )
  }
}
