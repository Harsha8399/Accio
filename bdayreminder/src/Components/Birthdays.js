import React, { Component } from 'react'
import data from './../Resources/data';
import List from './List';

class Birthdays extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: data
        }
    }
  render() {
    return (
      <div>
          <section className='container'>
              <h3>
                  {this.state.people.length} Birthdays today
              </h3>
              <List people={this.state.people}/>
              <button>Clear All</button>
          </section>
      </div>
    )
  }
}

export default Birthdays;
