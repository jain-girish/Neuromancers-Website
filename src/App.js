import Navbar from './pages/navbar';
import Home from './pages/home';
import Footer from './pages/footer';
import Events from './pages/events';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <header className="App-header"> */}
      <Home/>
      <Events/>
      {/* </header> */}
      <Footer/>
    </div>
  );
}

export default App;
