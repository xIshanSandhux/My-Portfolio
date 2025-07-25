// import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"
import MagicBento from "./helper/magicBento";
import Particles from "./helper/particles";

// Work experience data
const experienceTribalScale = [
  {
    year: "January 2025 - April 2025",
    title: "Agile Test Engineer Co-op",
    company: "TribalScale",
    location: "Toronto, ON",
    description: [
        "Conducted functional, automated, and grey-box testing on mobile, web, and backend systems in an Agile development environment.",
        "Built and maintained automated test suites for iOS and Android apps using Appium, WebDriverIO, and JavaScript, including integration for TestFlight-distributed builds via WebDriverAgent.",
        "Automated web application testing workflows with Cypress and JavaScript, ensuring robust regression coverage by increasing the test coverage by 60% and helping reduce escaped bugs by 35% through close developer collaboration.",
        "Developed comprehensive unit and integration tests in Python (pytest, mock) for a Groq-powered speech-to-text API and reducing critical API failures by 30%.",
        "Validated endpoint behavior, error handling, and system performance using Postman, Swagger, and mitmproxy.",
        "Languages and Tools: Appium, WebDriverIO, Cypress, Python, JavaScript, Postman, Swagger, mitmproxy, JIRA, AWS"
    ]
  }
];

const experiencePatriotElectric = [
  {
    year: "September 2023 - March 2024",
    title: "Junior Project Manager Co-op",
    company: "Patriot Electric Ltd.",
    location: "Victoria, BC",
    description: [
      "Led EV charger and solar infrastructure projects, applying technical design and cost-optimization strategies.",
      "Coordinated cross-team communication and ensured code-compliant designs using AutoCAD.",
      "Languages and Tools: AutoCAD, MS Project, Excel, Canadian Electrical Code"
    ]
  },
]

export default function Exp() {
  return (
    <div
      className="exp-container"
      style={{
        position: 'relative',
        minHeight: '100%', // Responsive height
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Particles as background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, height: '100%' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          mouseInteraction={false}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      {/* Text overlay */}
      <div
        className="exp-text-container"
        id="exp"
        style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '700px',
        //   background: 'rgba(0,0,0,0.3)',
        //   borderRadius: '16px',
        //   boxShadow: '0 4px 32px rgba(0,0,0,0.2)',
        }}
      >
        <h1>Experience</h1>
        <div
        className="exp-text-container"
        style={{
            cursor: 'default',
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
          padding: '0.75rem',
          maxWidth: '700px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '30px',
          boxShadow: '0 4px 32px rgba(237, 230, 230, 0.8)',
        }}
      >
        <div style={{ marginTop: '2rem' }}>
          {experienceTribalScale.map((exp, idx) => (
            <div cursor="default" key={idx} style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h2 style={{ margin: 0 }}>{exp.title} <span style={{ fontWeight: 'normal', color: '#ccc' }}>@ {exp.company}</span></h2>
              <h4 style={{ margin: '0.2em 0', color: '#b39ddb' }}>{exp.year} | {exp.location}</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="exp-text-container"
        style={{
            cursor: 'default',
            position: 'relative',
            zIndex: 2,
            color: '#fff',
            textAlign: 'center',
            padding: '0.75rem',
            marginTop: '2rem',
            maxWidth: '700px',
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '16px',
            boxShadow: '0 4px 32px rgba(237, 230, 230, 0.8)',
        }}
      >
        <div style={{ marginTop: '2rem' }}>
          {experiencePatriotElectric.map((exp, idx) => (
            <div cursor="default" key={idx} style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h2 style={{ margin: 0 }}>{exp.title} <span style={{ fontWeight: 'normal', color: '#ccc' }}>@ {exp.company}</span></h2>
              <h4 style={{ margin: '0.2em 0', color: '#b39ddb' }}>{exp.year} | {exp.location}</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}