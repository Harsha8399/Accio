import './App.css';
import React from 'react'
import Tabs from './Components/Tabs'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <div className='browser'>
          <Tabs/>
          <div className='viewport'>Pages Go Here</div>
        </div>
      </div>
    );
  }
}


export default App;
