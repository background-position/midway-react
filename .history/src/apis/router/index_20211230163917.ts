import Home from '../pages/index';
import About from '../pages/about';
export const router = [
    {
        path: '/',
        components: Home,
    },
    {
        path: '/about',
        components: About,
    },
];
export { router };
