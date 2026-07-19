import DeskPhoto from '../../../assets/8.png';
import Wrapper from '../../fragments/wrapper';
import {
    AboutHeading,
    AboutIntro,
    AboutKicker,
    ApproachNote,
    CompanyLink,
    EvidenceBoard,
    EvidenceTag,
    FocusFrame,
    FrameCaption,
    FrameCorners,
    FrameMeta,
    PersonalNote,
    Section,
    Statement,
} from './about-me.styles';

const AboutMe = () => (
    <Section aria-labelledby="about-me-heading">
        <Wrapper>
            <AboutIntro>
                <div>
                    <AboutKicker>Behind the work</AboutKicker>
                    <AboutHeading id="about-me-heading">About me<span>.</span></AboutHeading>
                </div>
                <Statement>
                    I care about the details people notice and the ones they
                    should never have to think about.
                </Statement>
            </AboutIntro>

            <EvidenceBoard>
                <FrameMeta aria-hidden="true">
                    <span>AB / 01</span>
                    <span>IN FOCUS</span>
                    <span>2026</span>
                </FrameMeta>

                <ApproachNote>
                    <EvidenceTag>How I work</EvidenceTag>
                    <h3>Curiosity, clarity, and care.</h3>
                    <p>
                        I turn complex problems into thoughtful, accessible
                        experiences. My computer science background is balanced
                        by an eye for design and the people using what I build.
                    </p>
                </ApproachNote>

                <FocusFrame>
                    <img
                        src={DeskPhoto}
                        alt="Alexandra's desk with interface sketches, a laptop, stationery, and a small stormtrooper helmet"
                        loading="lazy"
                    />
                    <FrameCorners aria-hidden="true">
                        <span /><span /><span /><span />
                    </FrameCorners>
                    <FrameCaption>
                        <strong>Observe closely.</strong>
                        Make thoughtfully.
                    </FrameCaption>
                </FocusFrame>

                <PersonalNote>
                    <EvidenceTag>Beyond the screen</EvidenceTag>
                    <p>
                        Usually found with a camera, at the cinema, dancing
                        salsa, writing, exploring somewhere new, or 3D printing
                        and painting the pieces I make.
                    </p>
                    <span aria-hidden="true">PHOTO · FILM · WORDS · PLACES · MAKING</span>
                </PersonalNote>

                <div className="about-companies">
                    <span>Selected chapters</span>
                    <div>
                        <CompanyLink href="https://www.mews.com/" target="_blank" rel="noopener noreferrer external">Mews</CompanyLink>
                        <CompanyLink href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer external">Spotify</CompanyLink>
                        <CompanyLink href="https://www.wbd.com/" target="_blank" rel="noopener noreferrer external">Warner Bros. Discovery</CompanyLink>
                    </div>
                </div>
            </EvidenceBoard>
        </Wrapper>
    </Section>
);

export default AboutMe;
