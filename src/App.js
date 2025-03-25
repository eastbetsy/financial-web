import './App.css';
import Goals from './pages/goals';
import Home from './pages/home';
import Rules from './pages/rules';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Home />
      <Goals />
      <Rules />
    </div>
  ); 
}

export default App;
