import React, { useEffect } from "react";
import {
  AboutMeHeader,
  AboutMeContainer,
  AboutMeSection,
} from "../styles/components/AboutMainStyles";
import { Sidebar } from "../styles/components/HeaderStyles";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMain() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div>
      <AboutMeContainer>
        <AboutMeHeader>
          <div data-aos="zoom-out" className="title">
            ABOUT ME
          </div>
          <Sidebar>
            <div className="socials">
              <Github
                style={{ padding: "20", fontSize: "30", color: "white" }}
                onClick={() =>
                  window.open("https://github.com/XenoCod", "_blank")
                }
              />
              <LinkedIn
                style={{ padding: "20", fontSize: "30", color: "white" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aditya-singh-8430771a8/",
                    "_blank"
                  )
                }
              />
            </div>

            <div className="scroll-down">
              <span className="title">SCROLL DOWN</span>
              <span className="after"></span>
            </div>
          </Sidebar>
        </AboutMeHeader>
        <AboutMeSection>
          <div className="myImg">
            <img src="" alt="" />
          </div>
          <div className="intro">
            <div data-aos="fade-up" className="desc">
              Some background ⏪
            </div>
            <div data-aos="fade-up" className="main-title">
              Reach me and let's have coffee together !!
            </div>
            <div data-aos="fade-up" className="my-info">
              <p>
                I'm{" "}
                <span>
                  <b>Aditya kumar Singh</b>
                </span>{" "}
                & I'm currently working as a Full Stack Developer. I have
                completed my{" "}
                <b>
                  <em>Bachelor of Technology in Electrical & Electronics</em>
                </b>{" "}
                from
                <u
                  style={{ color: "#2EC4B6", cursor: "pointer" }}
                  onClick={() => window.open("https://kiit.ac.in/")}
                >
                  {" "}
                  KIIT University.
                </u>
              </p>
              <br />
              <p>
                I have been developing websites & single page web apps since
                past 2 years. My go-to programming language is{" "}
                <b>
                  <em>
                    <span>JavaScript</span>
                  </em>
                </b>
                . When it comes to programming I mostly enjoy coding in{" "}
                <span>
                  <b>Java</b>
                </span>{" "}
                &{" "}
                <span>
                  <b>Python</b>
                </span>{" "}
                and always try to find the right solution for a problem. Well, I
                like to experiment as much as I can, on food and on my life. My
                body is made up of HTML & CSS, which is literally me! This
                defines me as a Full Stack Developer (Front End, Back End,
                Middleware, Whatever...)
              </p>
              <br />
              <p>
                I am a highly motivated, passionate, hard-core web developer
                with diverse experience in developing web apps ranging from{" "}
                <b>cute layouts, payment gateways, clones</b> and much more. I
                have a real passion for development and using my design
                experience I leverage my knowledge of typographic relationships
                and design patterns to create aesthetically pleasing but also
                very viable digital experiences. I find it incredibly rewarding
                to write not only clean code but to witness and be apart of the
                solution bringing a design into development..
              </p>
              <br />
              <p>
                Coming to other interests, I'm huge FIFA fan. I love to play &
                watch Football &
                <span style={{ color: "red" }}> Manchester United</span> to be
                precise. I had actively pursued football in school and college,
                made great friends because of it and had fun playing alongside
                so many amazing people.
              </p>
              <br />
              <p>
                So that's me. Hope I didn't bored you. If you liked it, connect
                with me on{" "}
                <span
                  style={{
                    color: "#0020A8",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/aditya-singh-8430771a8/"
                    )
                  }
                >
                  LinkedIn
                </span>{" "}
                & follow my{" "}
                <span
                  style={{
                    color: "#000000",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => window.open("https://github.com/XenoCod")}
                >
                  Github
                </span>
                . Let's not be strangers anymore. 😊
              </p>
            </div>
          </div>
        </AboutMeSection>
      </AboutMeContainer>
    </div>
  );
}

export default AboutMain;
