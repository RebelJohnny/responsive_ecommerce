import logo from './logo.svg';
import './App.css';
import { apiService } from './api.service';
import ProductCard from './Components/ProductCard';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
