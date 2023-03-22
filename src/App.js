import logo from './animation.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='neuromancer'>NEUROMANCERS</h2>
        <p className='subtitle'>THE PROGRAMMING SOCIETY OF <br></br>IIT BHUBANESWAR</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
