import logo from './logo.svg';
import './App.css';
import { Index } from './Components/Index';
import { Navigation } from './Components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './Components/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Navigation />
          <Index />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
