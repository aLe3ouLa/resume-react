import Hero from '../components/fragments/hero';
import AboutMe from '../components/blocks/about-me';
import Images from '../components/fragments/images';
import TechStack from '../components/blocks/tech-stack/tech-stack';
import Page from '../components/fragments/page';
import Projects from '../components/blocks/projects/projects';
import SectionTracker from '../components/SectionTracker';

import Img1 from '../assets/2.png';
import Img2 from '../assets/3.png';
import Img3 from '../assets/4.png';

import Img4 from '../assets/5.png';
import Img5 from '../assets/6.png';
import Img6 from '../assets/7.png';

const Homepage = () => {
    return (
        <Page>
            <SectionTracker sectionName="Hero">
                <Hero />
            </SectionTracker>
            <SectionTracker sectionName="About Me">
                <AboutMe />
            </SectionTracker>
            <SectionTracker sectionName="Portfolio Images 1">
                <Images Img1={Img1} Img2={Img2} Img3={Img3} />
            </SectionTracker>
            <SectionTracker sectionName="Tech Stack">
                <TechStack />
            </SectionTracker>
            <SectionTracker sectionName="Projects">
                <Projects />
            </SectionTracker>
            <SectionTracker sectionName="Portfolio Images 2">
                <Images Img1={Img4} Img2={Img5} Img3={Img6} />
            </SectionTracker>
        </Page>
    );
};

export default Homepage;
