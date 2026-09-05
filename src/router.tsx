import {
    createRootRoute,
    createRoute,
    createRouter,
    lazyRouteComponent,
} from '@tanstack/react-router';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
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
    component: lazyRouteComponent(() => import('./pages/Blog')),
});
const blogPostRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/blog/$slug',
    component: lazyRouteComponent(() => import('./pages/BlogPost')),
});
const productsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/products',
    component: lazyRouteComponent(() => import('./pages/Products')),
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
