import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/layout/header/header';
import Homepage from './pages/homepage';
import Photography from './pages/photography';
import DesignSystem from './pages/design-system';
import Analytics from './components/Analytics';

let router = createBrowserRouter([
    {
        path: '/',
        Component() {
            return (
                <>
                    <Analytics />
                    <Header />
                    <Homepage />
                    <Header />
                </>
            );
        },
    },
    {
        path: '/photography',
        Component() {
            return (
                <>
                    <Analytics />
                    <Header />
                    <Photography />
                    <Header />
                </>
            );
        },
    },
    {
        path: '/design-system',
        Component() {
            return (
                <>
                    <Analytics />
                    <Header />
                    <DesignSystem />
                </>
            );
        },
    },
]);

function App() {
    return (
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    );
}

export default App;
