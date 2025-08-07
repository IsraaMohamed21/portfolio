import car from "../assets/car.png";
import edara from "../assets/edara.png";

export default function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h2>Roadside Assistance Web App</h2>
        <img src={car} alt="ProjectImage" />
        <p>
          A web application that helps drivers find the nearest winch or repair
          service based on their real-time location. Built with React.js,
          Node.js, and Python, and integrates machine learning for
          location-based recommendations.
        </p>
        <div className="buttons">
          <a
            href="https://cars-delta-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/IsraaMohamed21/car-assist-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      <div className="project-card">
        <h2>Task Manager App</h2>
        <img src={edara} alt="ProjectImage" />
        <p>
          A simple and clean task management tool where users can add, update,
          and delete tasks. Built with React.js, uses LocalStorage for data
          persistence, and has a responsive UI.
        </p>
        <div className="buttons">
          <a
            href="https://inventory-theta-six-31.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/IsraaMohamed21/Inventory-Management"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      <div className="project-card">
        <h2>E-commerce Product Page</h2>
        <p>
          A single product page that displays item details, image slider, and an
          interactive cart. Built using HTML, CSS, and JavaScript with a
          mobile-first approach.
        </p>
        <div className="buttons">
          <a href="#live">Live Demo</a>
          <a href="#git">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}
