import React from "react";
import ProfileCardComponent from "./helper/profileCard";
import "./About.css";
import avatarImg from './assets/img2.png';

export default function About() {
    return (

        <div className="about-container">
  <div className="about-content">
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
      miniAvatarUrl={avatarImg}
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={false}
      onContactClick={() => console.log('Contact clicked')}
    />
    <div className="about-side-text">
      <p>
        {/* Your text here */}
        Hi! I'm Ishan, a passionate software engineer with experience in building modern web applications. I love working with React, Node.js, and exploring new technologies.
      </p>
    </div>
  </div>
</div>
       
    )
}