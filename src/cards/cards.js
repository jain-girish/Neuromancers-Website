import Tilt from 'react-vanilla-tilt';
import image from '../graphics/facebook.png';

import './cards.css';
// https://codepen.io/dtab428/pen/bRwMeq?editors=0111
// https://codepen.io/csanchezriballo/pen/pjdzaG

function Card() {
    return (
        <Tilt options={{scale: 1.2, speed: 1000, max: 30}} style={{width: '70vw', backgroundColor: 'none'}}>
        <div class="card" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.5">
            <img class="card-image" src={image}></img>
            <div class="card-text">
                <span class="date">4 days ago</span>
                <h2 class="name">
                    <span><span>P</span><span>P</span></span>
                    <span><span>l</span><span>l</span></span>
                    <span><span>a</span><span>a</span></span>
                    <span><span>y</span><span>y</span></span>
                </h2>
                <p class="description">
                    And get a chance to win tickets to the premiere of the movie.
                </p>
            </div>
            {/* <div class="card-stats">
                <div class="stat">
                    <div class="value">4<sup>m</sup></div>
                    <div class="type">read</div>
                </div>
                <div class="stat border">
                    <div class="value">5123</div>
                    <div class="type">views</div>
                </div>
                <div class="stat">
                    <div class="value">32</div>
                    <div class="type">comments</div>
                </div>
            </div> */}
        </div>
        </Tilt>
    );
}

export default Card;