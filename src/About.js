import "./About.css";
import Container from "react-bootstrap/Container";
const About = () => {
  return (
    <Container fluid>
      <header className="page-header" role="banner">
        <h1 className="project-name">Company List</h1>
        <h2 className="project-tagline">
          This repository contains opportunities for you to apply
        </h2>

        <a href="https://github.com/Priyaraj17/CompanyList" className="btn">
          View on GitHub
        </a>
      </header>
      <div className="container ">
        <h2>Reason for making this sheet 🤔</h2>
        <p>
          A few months ago when I was desperately looking for an internship, a
          friend of mine suggested me to create a company list and start cold
          emailing the recruiters of those companies. So, I created a doc and
          gathered all the information about the product based companies that
          hire for Software Engineering roles. Things did change for me after
          this sheet. I was able to interview with various companies like Yellow
          Messenger, Spyne AI, Netomi, and recieved test link for companies such
          as Cred, Sharechat, American Express, and so on. Even if you don't get
          the opportunity, you will have a solid network of recruiters.{" "}
        </p>
        <h2>How to contact the recruiter 🗣 </h2>
        <p>
          Suppose you want to connect with recruiters of Sharechat so these are
          steps which I used to follow:
        </p>
        <ol>
          <li>
            {" "}
            Search Recruiter/Talent Acquistion/HR on linkedIn with the company
            tag as Sharechat 👀
          </li>
          <li>
            {" "}
            Send them a personal invite with a message that I am looking for
            opportunities as an XYZ Intern and would love to talk about open
            roles with you 💬
          </li>
          <li> If possible then send them en email wih your resume 📧</li>
          <li> Repeat the above 2 steps with atleast 5-10 recruiters 🔁 </li>
          <li>
            {" "}
            Wait for them to accept your request and then talk to them about
            open roles. You just need a reply from one recruiter 😎
          </li>
        </ol>
        <h2>Usage ⭐️</h2>
        <p>
          Feel free to update this sheet and add details such as CTC and
          internship stipend as well. I hope this sheet will be helpful to
          others. Please share this sheet among your peers and do give it a
          star.
        </p>
        <h2 className="heading">Feel free to connect with me</h2>
        <p align="center">
          &nbsp;{" "}
          <a href="https://twitter.com/Helix_17">
            <img src="https://img.icons8.com/color/72/000000/twitter--v1.png" />
          </a>
          &nbsp;{" "}
          <a href="https://www.linkedin.com/in/priyaraj-sharma-9a2101187">
            <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png" />
          </a>
          &nbsp;{" "}
          <a href="https://github.com/Priyaraj17">
            <img src="https://img.icons8.com/nolan/72/github.png" />
          </a>
        </p>
      </div>
    </Container>
  );
};

export default About;
