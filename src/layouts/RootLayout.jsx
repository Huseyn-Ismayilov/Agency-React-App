import React from 'react';
import Header from './header/Header'
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="container">
                    <p>&copy; 2023 My Website</p>
                </div>
            </footer>
        </>

    );
};

export default RootLayout;