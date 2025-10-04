import styled from 'styled-components';

const Page = styled.main`
    margin-top: 10px; /* menu height */

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        margin-top: 20px; /* menu height */
    }
`;

export default Page;
