import React, {Component} from 'react'
import axios from 'axios'

import BikeCard from './BikeCard'
import Cart from './Cart'

export default class Bikes extends Component {
  constructor() {
    super()
    this.state = {
      bicycles: [],
      total: 0
    }

  }

  addToTotal = (price) => {
    this.setState({
      total: this.state.total + price
    })
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
      <div className="bicycles col-xs-12">
        <h1 className="title">Make Your Reservation</h1>
        <div className="row">
          {this
            .state
            .bicycles
            .map(bike => <BikeCard key={bike.id} bikes={bike} func={this.addToTotal}/>)
}
        </div>
        <Cart total={this.state.total}/>
      </div>
    )
  }
}
