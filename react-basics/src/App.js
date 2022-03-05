import './App.css';
// import Hello from './Components/Hello.js'
// import HelloClass from './Components/HelloClass.js';
import CounterClass from './Components/CounterClass.js';

function App() {
  return (
    <div className="App">
      {/* <Hello greetTo='World'/>
      <Hello greetTo='India' alsoGreetTo='Korea'/> */
      <CounterClass></CounterClass>
      }
    </div>
  );
}

export default App;
