import israa from "../assets/israa.jpg";
function Caption() {
  return (
    <>
      <div className="caption">
        <div className="Myimg">
          <img alt="Me" src={israa} />
        </div>
        <div className="myInfo">
          <p>Hello, I'm</p>
          <h1>Israa Mohammed</h1>
          <h3>
            I'm a Front-End Developer specialized in React.js, passionate about{" "}
            <br />
            building fast, interactive, and user-friendly web applications.{" "}
            <br />I focus on writing clean and maintainable code with great{" "}
            <br />
            attention to user experience and modern design principles.
          </h3>
          <a href="/IsraaMohamedFrontendDeveloper.pdf" download>
            <button>Download Cv</button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Caption;
