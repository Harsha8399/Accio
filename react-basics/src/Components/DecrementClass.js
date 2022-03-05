import React,{ Component } from 'react'

class Decrement extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 15,
        };
    }

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter-1
        })
    }
    render(){
        return(
            <>
            <h1 style={{fontSize:"10em"}}>{this.state.counter}</h1>
            <button onClick={this.decrementCounter}>Decrement</button>
            </>

        )
    }
}

export default Decrement