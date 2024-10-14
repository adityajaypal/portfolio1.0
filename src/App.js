import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";

import "./styles/App.css";

import particlesOptions from "./config/bgParticles.json";

import Gallery from "./components/gallery";
import LandingPage from "./components/landingPage";

function App() {
    const [init, setInit] = useState(false);
    const [optionConfig, setOptionConfig] = useState(particlesOptions);
    const [landing, setLanding] = useState(true);

    console.log(landing)

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
            setLanding(true);
        });
    }, []);

    return (
        <>
            <div className="background" >
                {init && <Particles options={optionConfig}/>}
            </div>
            <LandingPage/>
            <div className="gallery-container">
                <Gallery/>
            </div>
        </>
    );
}

export default App;
