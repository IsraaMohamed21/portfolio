import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
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
    </>
  );
}
