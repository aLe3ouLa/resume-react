import React from "react";

import Hero from "../components/fragments/hero";
import AboutMe from "../components/blocks/about-me";
import Images from "../components/fragments/images";
import TechStack from "../components/blocks/tech-stack";
import Page from "../components/fragments/page";
import Freelance from "../components/blocks/freelance";
import InstagramGrid from "../components/blocks/instagram-grid";

const Homepage = () => {
  return (
    <Page>
      <Hero />
      <AboutMe />
      <Images />
      <TechStack />
      <InstagramGrid account="ale3.js" numberOfMediaElements="5" />
      <Freelance />
    </Page>
  );
};

export default Homepage;
