import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import Products from './Components/Products/Products';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <h1>Welcome to the site</h1>
      <p>Explore and buy</p>
      <Products/>
      <Reviews/>
    </div>
  );
}

export default App;
