import logo from '../logo.svg';
import Game from './Game/Game.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Adivina el numero entre 1 y 100</p>
      </header>
      <div>
        <Game/>
      </div>
    </div>
  );
}

export default App;
