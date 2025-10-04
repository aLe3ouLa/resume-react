import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/layout/header/header';
import Homepage from './pages/homepage';
import Photography from './pages/photography';
import Analytics from './components/Analytics';

let router = createBrowserRouter([
    {
        path: '/',
        Component() {
            return (
                <>
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
                    <Header />
                    <Photography />
                    <Header />
                </>
            );
        },
    },
]);

function App() {
    return (
        <>
            <Analytics />
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </>
    );
}

export default App;
