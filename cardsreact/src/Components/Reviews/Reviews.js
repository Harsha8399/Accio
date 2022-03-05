import React, { Component } from 'react'

class Reviews extends Component {
  constructor(props) {
    super(props)
    console.log('Inside Constructor')
    this.state ={
        count: 0
    }
  }
  componentDidMount() {
      console.log('Inside the componentDidMount')
      this.setState({
          count: 1
      })
  }

  render() {
    console.log('Inside render method')
    return (
        <>
        <h2>Reviews</h2>
        <div>Customers:{this.state.count}</div>
        </>
        
    );
  }
}

export default Reviews;
