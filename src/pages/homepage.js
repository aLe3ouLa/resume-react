import React from "react";

import Hero from "../components/fragments/hero";
import AboutMe from "../components/blocks/about-me";
import Images from "../components/fragments/images";
import TechStack from "../components/blocks/tech-stack";
import Page from "../components/fragments/page";
import InstagramGrid from "../components/blocks/instagram-grid";
import Projects from "../components/blocks/projects";

const Homepage = () => {
  return (
    <Page>
      <Hero />
      <AboutMe />
      <Images />
      <TechStack />
      <InstagramGrid account="alexa.codes" numberOfMediaElements="5" />
      <Projects />
    </Page>
  );
};

export default Homepage;
