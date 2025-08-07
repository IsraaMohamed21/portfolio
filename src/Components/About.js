import prog from "../assets/prog.jpg"
import AboutNav from "./AboutNav";
export default function About() {
  return (
    <>
      <div className="about">
                  <div className="about-img">
                  <img alt= "about" src={prog}/>
                 </div>
                 <div className="content">
                  <h2>About Me</h2>
                  I'm Esraa Mohamed, a Computer and <br/>Artificial Intelligence
                graduate from Helwan University. <br />I specialize in Front-End
                Development with React.js and have <br/>a strong passion for clean
                design, user experience, and writing maintainable code.
                 </div> 
                 <div className="about-nav">
                 <AboutNav></AboutNav>
                 </div>
                
      </div>
    </>
  );
}
