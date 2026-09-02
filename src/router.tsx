import {
    createRootRoute,
    createRoute,
    createRouter,
} from '@tanstack/react-router';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

const rootRoute = createRootRoute({
    component: Layout,
    notFoundComponent: NotFound,
});
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});
const blogRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/blog',
    component: Blog,
});
const blogPostRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/blog/$slug',
    component: BlogPost,
});
const productsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/products',
    component: Products,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    blogRoute,
    blogPostRoute,
    productsRoute,
]);

export const router = createRouter({
    routeTree,
    defaultNotFoundComponent: NotFound,
});
export { blogPostRoute };

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
