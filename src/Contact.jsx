import PixelCard from './helper/pixelCard';
import TiltedCard from './helper/tiltedCard';
import miniAvatarImg from './assets/github-icon-lg.png';
import emailImg from './assets/email.jpg';
import linkedinImg from './assets/linkedin.jpg';
import './Contact.css';

export default function Contact() {
    return (
        <div id="contact">
            <h1>Contact</h1>
            <p>Feel free to reach out to me via any of the following!</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>                
            <TiltedCard
            imageSrc={miniAvatarImg}
            altText="GitHub"
            captionText="xIshanSandhux"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            onClick={() => window.open('https://github.com/xIshanSandhux', '_blank')}
            overlayContent={
                <button
                className="github-pill"
                onClick={() => window.open('https://github.com/xIshanSandhux', '_blank')}
                >
                GitHub
                </button>
            }
            />
            <TiltedCard
            imageSrc={emailImg}
            altText="Email"
            captionText="itsishan022@gmail.com"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            onClick={() => window.open('mailto:itsishan022@gmail.com', '_blank')}
            overlayContent={
                <button
                className="github-pill"
                onClick={() => window.open('mailto:itsishan022@gmail.com', '_blank')}
                >
                Email
                </button>
            }
            />
            <TiltedCard
            imageSrc={linkedinImg}
            altText="LinkedIn"
            captionText="Ishan Sandhu"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            onClick={() => window.open('https://www.linkedin.com/in/ishan-sandhu3121/', '_blank')}
            overlayContent={
                <button
                className="github-pill"
                onClick={() => window.open('https://www.linkedin.com/in/ishan-sandhu3121/', '_blank')}
                >
                LinkedIn
                </button>
            }
            />            
            </div>
           
        </div>
    )
}