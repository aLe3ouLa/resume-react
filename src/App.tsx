import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="blog" element={<Blog />} /><Route path="blog/:slug" element={<BlogPost />} /><Route path="products" element={<Products />} /><Route path="*" element={<NotFound />} /></Route></Routes></BrowserRouter>;
}
