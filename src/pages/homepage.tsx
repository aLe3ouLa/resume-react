import Hero from '../components/fragments/hero';
import AboutMe from '../components/blocks/about-me';
import MakerDesk from '../components/blocks/maker-desk/MakerDesk';
import TechStack from '../components/blocks/tech-stack/tech-stack';
import Page from '../components/fragments/page';
import Projects from '../components/blocks/projects/projects';
import Spotify from '../components/blocks/spotify/spotify';
import SectionTracker from '../components/SectionTracker';

const Homepage = () => {
    return (
        <Page>
            <SectionTracker sectionName="Hero">
                <Hero />
            </SectionTracker>
            <SectionTracker sectionName="About Me">
                <AboutMe />
            </SectionTracker>
            <SectionTracker sectionName="Tech Stack">
                <TechStack />
            </SectionTracker>
            <SectionTracker sectionName="Projects">
                <Projects />
            </SectionTracker>
            <SectionTracker sectionName="Maker Desk">
                <MakerDesk />
            </SectionTracker>
            <SectionTracker sectionName="Spotify">
                <Spotify />
            </SectionTracker>
        </Page>
    );
};

export default Homepage;
