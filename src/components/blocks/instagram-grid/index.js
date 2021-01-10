import React from "react";
import withInstagramFeed from "origen-react-instagram-feed";
import styled from "styled-components";
import compose from 'recompose/compose';

const InstaGrid = ({ classes, media, account = 'alexa.codes', status }) => {
  return (
    <InstaCarousel className="instagramHolder">
      <div id="instagramOverflow">
        {media &&
          status === "completed" &&
          media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
            <div key={id} className="singleInstaImg">
              <a
                href={postLink || `https://www.instagram.com/${account}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={displayImage}
                  alt={accessibilityCaption || "Instagram picture"}
                  className={classes && classes.image}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
      </div>
      {status === 'loading' && <p>loading...</p>}
      {status === 'failed' && <a href={`https://www.instagram.com/alexa.codes`}>Check instagram here</a>}
    </InstaCarousel>
  );
};

InstaGrid.defaultProps = {
  media: undefined,
};

export default compose(
  withInstagramFeed,
)(InstaGrid);


const InstaCarousel = styled.div`
  width: 100vw;

  overflow-x: hidden;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 490px) {
    width: 100vw;
    max-width: 320px;
  }

  & > div {
    display: flex;
    justify-content: flex-start;
    position: relative;
    @media (max-width: 830px) {
      width: 324%;
    }
    @media (max-width: 490px) {
      width: 439%;
    }
  }

  #instagramOverflow {
    @media (max-width: 490px) {
      left: 52px;
    }
  }

  .singleInstaImg {
    width: 180px;
    height: 180px;
    margin: 16px;
    justify-content: space-between;
    visibility: hidden;
    overflow: hidden;
    @media (max-width: 660px) {
      width: 100px;
      height: 100px;
      margin: 4px;
    }
  }

  .singleInstaImg img {
    object-fit: cover;
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .singleInstaImg:nth-of-type(1),
  .singleInstaImg:nth-of-type(2),
  .singleInstaImg:nth-of-type(3),
  .singleInstaImg:nth-of-type(4),
  .singleInstaImg:nth-of-type(5) {
    display: flex;
    visibility: visible;
  }
  @media (max-width: 830px) {
    .singleInstaImg:nth-of-type(5) {
      visibility: hidden;
    }
  }
  @media (max-width: 490px) {
    .singleInstaImg:nth-of-type(4),
    .singleInstaImg:nth-of-type(5) {
      visibility: hidden;
    }
  }
`;
