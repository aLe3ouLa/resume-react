import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/layout/header/header';
import Homepage from './pages/homepage';
import Photography from './pages/photography';
import Blog from './pages/blog';
import BlogPost from './pages/blog-post';
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
        path: '/blog',
        Component() {
            return (
                <>
                    <Analytics />
                    <Header />
                    <Blog />
                    <Header />
                </>
            );
        },
    },
    {
        path: '/blog/:slug',
        Component() {
            return (
                <>
                    <Analytics />
                    <Header />
                    <BlogPost />
                    <Header />
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
