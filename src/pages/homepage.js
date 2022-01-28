import React from "react";

import Hero from "../components/fragments/hero";
import AboutMe from "../components/blocks/about-me";
import Images from "../components/fragments/images";
import TechStack from "../components/blocks/tech-stack";
import Page from "../components/fragments/page";
import InstagramGrid from "../components/blocks/instagram-grid";
import Projects from "../components/blocks/projects";

import Img1 from "../assets/2.png";
import Img2 from "../assets/3.png";
import Img3 from "../assets/4.png";

import Img4 from "../assets/5.png";
import Img5 from "../assets/6.png";
import Img6 from "../assets/7.png";

const Homepage = () => {
  return (
    <Page>
      <Hero />
      <AboutMe />
      <Images Img1={Img1} Img2={Img2} Img3={Img3} />
      <TechStack />
      <InstagramGrid account="alexa.codes" numberOfMediaElements="5" />
      <Projects />
      <Images Img1={Img4} Img2={Img5} Img3={Img6} />
    </Page>
  );
};

export default Homepage;
