import "./home.component.scss";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import cardimg1 from "../../assets/cardi1.png";
import cardimg2 from "../../assets/cardi2.png";
import cardimg3 from "../../assets/cardi3.png";
import homeimg from "../../assets/homeimg.png";
import homeimg2 from "../../assets/homeimg2.png";
import homeimg3 from "../../assets/homeimg3.png";

import AnimatedNumbers from "react-animated-numbers";
import { useState } from "react";

const Home = () => {
  const [num, SetNum] = useState(0);
  return (
    <div
      className="container"
      onMouseMove={() => {
        if (num === 0) {
          SetNum(num + 300);
        }
      }}
    >
      <div className="home-top">
        <div className="homeimg-container">
          <img alt="loading" src={homeimg} />
        </div>
        <div className="homeimg2-container">
          <img alt="loading" src={homeimg2} />
        </div>
        <div className="homeimg3-container">
          <img alt="loading" src={homeimg3} />
        </div>
        <div className="cont-pf">
          <h2>
            {num === 0 ? "??" : <AnimatedNumbers animateToNumber={num} configs={{ mass: 1, tension: 100, friction: 100 }} />}
            {num === 0 ? "" : "+"}
          </h2>
          <p>Projects Funded</p>
        </div>
        <h1>Web3 Grants</h1>
        <p className="pf-text">In support of our mission, the Web3 Foundation grants program funds software development and research in the field of decentralized software protocols.</p>
      </div>
      <div className="home-logo">
        <a href="/">
          <img className="logo-1" alt="loading" src={logo1} />
        </a>
        <a href="/">
          <img className="logo-2" alt="loading" src={logo2} />
        </a>
        <a href="/">
          <img className="logo-3" alt="loading" src={logo3} />
        </a>
        <a href="/">
          <img className="logo-4" alt="loading" src={logo4} />
        </a>
      </div>
      <div className="p-i">
        <h1>Project Ideas ?</h1>
        <div className="underline"></div>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="200">
          An overview of existing projects in the Web 3.0 Technology Stack along with broad project ideas we would potentially be interested in funding can be found here, as well as a list of previously accepted applications here.
        </p>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="200">
          Requests For Proposals (RFPs) represent concrete ideas for projects that we would like to see implemented. Several teams may apply for the same RFP, so even if another team has already applied to implement a certain RFP, we invite you to do
          the same if you're interested.
        </p>
      </div>
      <div className="levels">
        <h2>Levels</h2>
        <div className="underline underline2"></div>
        <p className="level-header">The W3F Grants Program offers different grant levels to help you best depending on your current stage.</p>
        <div className="card-container">
          <div className="card" data-aos="zoom-in" data-aos-offset="200">
            <div className="card-image">
              <img alt="loading" src={cardimg1} />
              <div className="card-header">Level 1</div>
            </div>
            <div className="card-content">
              <p className="cc-main">Target:</p>
              <p className="cc-sub">Individuals & small teams</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Amount:</p>
              <p className="cc-sub">Upto $10,000</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Requirements:</p>
              <p className="cc-sub">2 approvals</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Benefits:</p>
              <p className="cc-sub">Feedback during application process and evaluation, introduction to related teams/projects.</p>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-offset="200">
            <div className="card-image">
              <img alt="loading" src={cardimg2} />
              <div className="card-header">Level 2</div>
            </div>
            <div className="card-content">
              <p className="cc-main">Target:</p>
              <p className="cc-sub">Individuals & small teams</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Amount:</p>
              <p className="cc-sub">Upto $10,000</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Requirements:</p>
              <p className="cc-sub">2 approvals</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Benefits:</p>
              <p className="cc-sub">Feedback during application process and evaluation, introduction to related teams/projects.</p>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-offset="200">
            <div className="card-image">
              <img alt="loading" src={cardimg3} />
              <div className="card-header">Level 3</div>
            </div>
            <div className="card-content">
              <p className="cc-main">Target:</p>
              <p className="cc-sub">Individuals & small teams</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Amount:</p>
              <p className="cc-sub">Upto $10,000</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Requirements:</p>
              <p className="cc-sub">2 approvals</p>
            </div>
            <div className="card-content">
              <p className="cc-main">Benefits:</p>
              <p className="cc-sub">Feedback during application process and evaluation, introduction to related teams/projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
