export default function Contact() {
  return (
    <>
      <h2 className="h-contact">Contact Me</h2>
      <div className="cont">
        <div className="contact">
          I'm always open to discussing new opportunities, collaborations,
          <br />
          or just a quick chat! Feel free to reach out through any of the
          following <br />
          especially if you're looking for a motivated front-end developer to
          join your team,
          <br /> contribute to a project, or collaborate on something
          meaningful.
        </div>
        <div className="contact-card">
          <table>
            <td>
              <tr>
                <div>
                  <h3>Email:</h3>
                  <a href="mailto:israamoh217@gmail.com">
                    israamoh217@gmail.com
                  </a>
                </div>
              </tr>
              <tr>
                <div>
                  <h3>LinkedIn:</h3>
                  <a href="https://www.linkedin.com/in/israa-mohammed-207931270/">
                    linkedin.com/israa-mohammed
                  </a>
                </div>
              </tr>
              <tr>
                <div>
                  <h3>GitHub:</h3>{" "}
                  <a href="https://github.com/IsraaMohamed21">
                    github.com/IsraaMohamed21
                  </a>
                </div>
              </tr>
              <tr>
                <div>
                  <h3>Location:</h3> Cairo, Egypt
                </div>
              </tr>
            </td>
          </table>
        </div>
      </div>
    </>
  );
}
