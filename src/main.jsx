import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projectsjsx';

// RootLayout
import Root from './layouts/RootLayout';

// Css
import './index.css';

import ScrollToTop from './ScrollToTop'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <ScrollToTop />
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Projects" element={<Projects />} />
        </Route>
    )
);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};


ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);