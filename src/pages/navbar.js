import instiLogo from '../graphics/iit_logo.png';
import './navbar.css';

function Navbar(){
  return (
    <nav>
      <img src={instiLogo} alt="logo" id="instiLogo"></img>
      <div id="navbar">
        <ul>
          <li><a href="https://google.com" className='active'>Home</a></li>
          <li><a href="https://google.com">Events</a></li>
          <li><a href="https://google.com">Projects</a></li>
          <li><a href="https://google.com">Members</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;