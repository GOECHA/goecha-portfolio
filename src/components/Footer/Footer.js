import React from "react";
import { ReactComponent as HomeIcon } from "../../images/icons/home-icon2.svg";
import { ReactComponent as PhoneIcon } from "../../images/icons/phone-icon.svg";
import { ReactComponent as EmailIcon } from "../../images/icons/email-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/icons/GH.svg";
import { ReactComponent as LinkedInIcon } from "../../images/icons/LI.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <section className="left">
          <div className="location">
            <HomeIcon
              style={{
                width: "1.5rem",
                color: "#fff",
                marginRight: "1rem",
              }}
              className="home-icon"
              alt="homeIcon"
            />
            <div>
              <p>Denver, CO</p>
              <p>80209</p>
            </div>
            <div className="phone">
              <h4>
                <PhoneIcon
                  style={{
                    width: "1.5rem",
                    color: "#fff",
                    marginRight: "1rem",
                  }}
                  className="phone-icon"
                  alt="phoneIcon"
                />
                407.963.5792
              </h4>
            </div>
            <div className="email">
              <h4>
                <EmailIcon
                  style={{
                    width: "1.5rem",
                    color: "#fff",
                    marginRight: "1rem",
                  }}
                  className="email-icon"
                  alt="emailIcon"
                />
                chantalgoethals@gmail.com
              </h4>
            </div>
          </div>
        </section>
        <section className="right">
          <h4> About the company</h4>
          <p> This is me Chantal Goethals. I love to create and learn new tech!</p>
          <div className="social">
                <GithubIcon
                  style={{
                    width: "2rem",
                    color: "#fff",
                    marginRight: ".5rem",
                  }}
                  className="github-icon"
                  alt="github icon"
                />
                <LinkedInIcon
                  style={{
                    width: "2rem",
                    color: "#fff",
                    marginRight: ".5rem",
                  }}
                  className="linkedin-icon"
                  alt="linkedin icon"
                />
            </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
