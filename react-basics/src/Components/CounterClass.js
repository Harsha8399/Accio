import React,{ Component} from 'react';

class CounterClass extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
        };
    }

    incrementCounter = () => {
        this.setState((prevState)=>({
            counter: prevState.counter+1
        }))
    }

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter-1
        })
    }

    plus3Increment = () => {
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }

    render(){
        return (
            <>
            <h1 style={{
                fontSize:"10em"
            }}>{(this.state.counter)}</h1>
            <button onClick={this.incrementCounter}>Increment</button>
            <button onClick={this.decrementCounter}>Decrement </button>
            <button onClick={this.plus3Increment}>3 times </button>
            
            </>
        )
    }
}

export default CounterClass