import Wrapper from '../../fragments/wrapper';
import { ColoredSpan, TwoColumn, Paragraph } from './about-me.styles';

const AboutMe = () => {
    return (
        <section>
            <Wrapper>
                <h2>
                    About me <ColoredSpan>.</ColoredSpan>
                </h2>

                <TwoColumn>
                    <Paragraph>
                        <span role="img" aria-label="Hello, world">
                            👋
                        </span>{' '}
                        I'm a Frontend Engineer with a computer science
                        background and working knowledge of UX design and web
                        accessibility principles. I contrubuted to{' '}
                        <a
                            href="//www.mews.com/"
                            target="_blank"
                            rel="noopener noreferrer external"
                        >
                            Mews
                        </a>
                        ,{' '}
                        <a
                            href="//www.spotify.com/"
                            target="_blank"
                            rel="noopener noreferrer external"
                        >
                            Spotify
                        </a>{' '}
                        and{' '}
                        <a
                            href="//www.wbd.com/"
                            target="_blank"
                            rel="noopener noreferrer external"
                        >
                            Warner Bros. Discovery
                        </a>
                        .
                    </Paragraph>
                    <Paragraph>
                        I enjoy creating simple, clean and creative user
                        interfaces using the latest web technologies. I
                        specialize in JavaScript and have professional
                        experience working with modern frameworks.
                    </Paragraph>
                    <Paragraph>
                        I like content creation and as a hobby I write some
                        articles about various web programming topics on{' '}
                        <a
                            href="https://dev.to/ale3oula"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dev.to
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://www.instagram.com/alexa.codes/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @alexa.codes
                        </a>
                    </Paragraph>
                    <Paragraph>
                        When not working, I'm likely watching sci-fi movies in
                        cinema, being creative, dancing salsa 💃, travelling the
                        world or taking strolls with my camera!
                    </Paragraph>
                </TwoColumn>
            </Wrapper>
        </section>
    );
};

export default AboutMe;
