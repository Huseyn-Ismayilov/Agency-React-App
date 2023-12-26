import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';

// RootLayout
import Root from './layouts/Layout';

// Css
import './index.css';


const router = createBrowserRouter([
    {
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/About',
                element: <About />
            },
            {
                path: '/Services',
                element: <Services />
            },
            {
                path: '/Projects',
                element: <Projects />
            }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);