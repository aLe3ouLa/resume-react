import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import theme, { Defaults } from './styles';
import { ThemeProvider } from 'styled-components';

const container = document.getElementById('root')!;

const reactRoot: React.ReactNode = (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Defaults />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

// react-snap prerenders each route to static HTML at build time. When that
// markup is present, hydrate it instead of throwing it away with a fresh render.
if (container.hasChildNodes()) {
    hydrateRoot(container, reactRoot);
} else {
    createRoot(container).render(reactRoot);
}
