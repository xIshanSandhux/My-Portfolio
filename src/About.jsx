import React from "react";
import ProfileCardComponent from "./helper/profileCard";
import "./About.css";
import avatarImg from './assets/img2.png';
import miniAvatarImg from './assets/github.webp';
import { useRef } from 'react';
import VariableProximity from './helper/variableProx';
// import DecryptedText from "./helper/DecryptText";


export default function About() {
  const containerRef = useRef(null);
    return (

  <div className="about-container" id="about">
  <div className="about-content" style={{marginTop: '10px'}}>
    <h1>About Me</h1>
  </div>
  <div className="about-row">
    <ProfileCardComponent
      name="Ishan Sandhu"
      title="Software Engineer"
      handle="xIshanSandhux"
      status="Online"
      contactText="GitHub"
      showBehindGradient={true}
      avatarUrl="src/assets/img1.jpeg"
      miniAvatarUrl={miniAvatarImg}
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={false}
      onContactClick={() => window.open('https://github.com/xIshanSandhux', '_blank')}
    />
    <div className="about-side-text">
      <p> 
      <div
ref={containerRef}
style={{position: 'relative', fontSize: '2rem', fontWeight: 'semibold'}}
>        
         <VariableProximity
        label={"Hi! I'm Ishan, a 4th year software engineering student at University of Victoria (UVic) who loves to code and build cool stuff."}
        className={'variable-proximity-demo'}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={130}
        falloff='gaussian'
        />
        </div>
      </p>
    </div>
  </div>
</div>
       
    )
}