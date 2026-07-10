import { SectionHeader } from '../../../design-system/components/SectionHeader/SectionHeader';
import { SectionSubtitle } from '../../../design-system/components/SectionSubtitle/SectionSubtitle';
import Wrapper from '../../fragments/wrapper';
import { SectionContainer, HeaderSection, EmbedCard } from './spotify.styles';

const PLAYLIST_ID = '0YaUfM2M6lA7cxNQaB5JGA';

const Spotify = () => {
    return (
        <SectionContainer aria-labelledby="spotify-heading">
            <Wrapper>
                <HeaderSection>
                    <SectionHeader id="spotify-heading" text="On Repeat" />

                    <SectionSubtitle className="italic leading-[1.5] mb-lg tablet:mb-md">
                        The soundtrack to my coding sessions
                    </SectionSubtitle>
                </HeaderSection>

                <EmbedCard>
                    <iframe
                        title="Spotify playlist"
                        src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-[12px] block"
                    />
                </EmbedCard>
            </Wrapper>
        </SectionContainer>
    );
};

export default Spotify;
