import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    body {
        margin: 0 auto;
        padding: 0;
        min-width: 320px;
        overflow-x: hidden;
        &.locked {
        overflow-y: hidden;
        }
    }

    li {
        list-style-type: none;
    }

    a {
        cursor: pointer;
    }

    a:hover {
        color: ${({ theme }) => theme.color.secondary};
        text-decoration: underline ${({ theme }) => theme.color.tertiary} wavy;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;
