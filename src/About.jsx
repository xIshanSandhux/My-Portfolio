import React from "react";
import ProfileCardComponent from "./helper/profileCard";
import "./About.css";

export default function About() {
    return (

        <div className="about-container">
            <div className="about-content">
                <h1>About Me</h1>
            </div>
            
            <ProfileCardComponent
            name="Ishan Sandhu"
            title="Software Engineer"
            handle="ishansandhu"
            status="Online"
            contactText="Contact Me"
            showBehindGradient={false}
            //   avatarUrl="/path/to/avatar.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            />
            
        </div>
       
    )
}