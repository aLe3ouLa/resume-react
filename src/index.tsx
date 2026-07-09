import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root')!;

const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) {
    window.history.replaceState(null, '', redirect);
}

const reactRoot: React.ReactNode = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// react-snap prerenders each route to static HTML at build time. When that
// markup is present, hydrate it instead of throwing it away with a fresh render.
if (container.hasChildNodes()) {
    hydrateRoot(container, reactRoot);
} else {
    createRoot(container).render(reactRoot);
}
