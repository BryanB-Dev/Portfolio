import React from 'react';
import Header from '../Header';
import Particle from '../Particle';
import Footer from '../Footer';

export default function Layout({ children }) {
    return (
        <>
            <div className="wrapper">
                <Particle />
                <Header />
                {children}
            </div>
            <Footer />
        </>
    );
};