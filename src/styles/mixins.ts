import { css } from 'styled-components';

/**
 * Neo-brutalist hard outline: a solid black border paired with a flat,
 * offset black drop shadow. `border` is the border width; `shadow` is the
 * shadow offset (defaults to the border width for a 1:1 look).
 */
export const hardOutline = (border = 3, shadow = border) => css`
    border: ${border}px solid ${({ theme }) => theme.color.black};
    box-shadow: ${shadow}px ${shadow}px 0 ${({ theme }) => theme.color.black};
`;

/**
 * White neo-brutalist card surface: rounded corners, a 3px black outline
 * with an 8px offset shadow, and a transition primed for the hover "lift".
 * Pair with `cardLift` for the interaction.
 */
export const neoCard = css`
    background: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    ${hardOutline(3, 8)}
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
`;

/**
 * Card hover "lift": nudges the card up and to the left while growing the
 * offset shadow in an accent colour. Pass a styled-components interpolation
 * for the shadow colour (defaults to the primary theme colour).
 */
export const cardLift = (
    accentShadow: unknown = ({ theme }: { theme: any }) => theme.color.primary
) => css`
    &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 11px 11px 0 ${accentShadow as never};
    }
`;
