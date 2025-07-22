import Orb from './helper/Orb';
import SplashCursor from './helper/SplashCursor';


export default function Hero() {
  return (
    <div className='orb-container'>
        <SplashCursor />
        <Orb
    hoverIntensity={2}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
  <div className="hero-text">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a software engineer who likes to code and build cool tech</p>
</div>
    </div>
    
  );
}
