import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
// Pages
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Projects from './pages/ProjectsPage';
import Header from './layouts/header/Header';

// RootLayout
import Root from './layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
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

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);