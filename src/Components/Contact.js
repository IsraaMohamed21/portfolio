import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <>
     <h2 className="connect-header">Let's Connect</h2>
      <div className="cont">
        <div className="contact">
          I'm always open to discussing new opportunities especially if you're
          looking
          <br />
          for a motivated front-end developer to join your team, contribute to a
          project.
            <div className="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/israa-mohammed-207931270/">
                <img alt="linkedin" src={linkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/IsraaMohamed21">
                <img alt="github" src={github} />
              </a>
            </li>
          </ul>
        </div>
        </div>
      <ContactForm></ContactForm>
      </div>
    </>
  );
}
