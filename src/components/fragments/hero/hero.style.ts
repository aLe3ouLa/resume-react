import styled, { keyframes } from 'styled-components'

export const Title = styled.h1`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.03em;
    margin-bottom: 0px;
    margin-left: 0px;
    color: ${({ theme }) => theme.color.text};
    cursor: none;

    & > span {
        font-size: 4rem;
    }
`

export const ColoredSpan = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-weight: 700;
    font-size: 4rem;
    cursor: none;
    &:hover {
        color: ${({ theme }) => theme.color.secondary};
        text-decoration: underline ${({ theme }) => theme.color.tertiary} wavy;
    }
`

export const Quotes = styled.div`
    background-image: url(https://pluspng.com/img-png/quotation-png-file-quote-background-transparent-png-512.png);
    padding-left: 100px;
    padding-right: 100px;
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-size: contain;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: column;

        img {
            width: 200px;
            margin-top: 40px;
        }
    }
`

export const Quote = styled.span`
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const Text = styled.span`
    background: linear-gradient(
        219deg,
        #186cb8 19%,
        transparent 0,
        transparent 20%,
        #2a9a9f 0,
        #2a9a9f 39%,
        transparent 0,
        transparent 40%,
        #f1b211 0,
        #f1b211 59%,
        transparent 0,
        transparent 60%,
        #e83611 0,
        #e83611 79%,
        transparent 0,
        transparent 80%,
        #f9002f 0
    );

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 3vw;
    font-weight: 500;
`

const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(12.0deg) }
   40% { transform: rotate(-6.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`

export const Wave = styled.span`
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: ${waveAnimation};
    display: inline-block;
    font-size: 4.2rem;
`
