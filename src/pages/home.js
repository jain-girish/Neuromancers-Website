import neuroLogo from '../graphics/neuro logo.png';
import background from '../graphics/video-gif.mp4';
// https://pixabay.com/videos/connection-global-graphic-network-113368/
import './home.css';

function Home() {
  return (
    <div className='home'>
        <video autoPlay muted loop id="myVideo">
            <source src={background} type="video/mp4"/>
        </video>
        
        <div className="content">
          <img src={neuroLogo} alt="logo" id="neuroLogo"></img>
          <h1 className='neuromancer'>NEUROMANCERS</h1>
          <div className='line'></div>
          <p className='subtitle'>THE PROGRAMMING SOCIETY OF <br></br>IIT BHUBANESWAR</p>
        </div>
    </div>
  );
}

export default Home;
