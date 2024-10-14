import React, { useState, useEffect } from 'react';

import "../styles/App.css";

const LandingPage = () => {
    
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY/window.innerHeight > 0.39) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(  
        <div className="landing-page">
            <h1 className="landing-h1"><mark className={`landing-mark${isSticky ? '-sticky' : ''}`} >Hari's Creations</mark></h1>
        </div>
    );
}

export default LandingPage;