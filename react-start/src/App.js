import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1'
import Component2 from './Components/Component2';

function App() {
  return (
    <div className="App">
      This is Harsha
      <Component1/>
      <h1>Developer Details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta inventore tenetur reiciendis ea. Optio porro quo quisquam consequatur aliquid!
      </p>
      <h6>Here comes second component</h6>
      <Component2/>
    </div>
  );
}

export default App;
