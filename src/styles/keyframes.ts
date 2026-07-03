import { keyframes } from 'styled-components';

// Shared entrance animation: fade in while rising from below.
// Used across section blocks (about-me, tech-stack) and the photography page.
export const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
