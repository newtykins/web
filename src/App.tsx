import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min.js';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import Helmet from 'react-helmet';
import Social from './components/Social';
import Song from './components/Song';
import Favicon from 'react-favicon';

interface AppProps {}

function App({}: AppProps) {
    const [vantaEffect, setVantaEffect]: any = useState(0);

    useEffect(() => {
        // Handle the VANTA animation
        if (!vantaEffect) {
            const { innerHeight: height, innerWidth: width } = window;

            setVantaEffect(
                NET({
                    el: 'body',
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: height,
                    minWidth: width,
                    backgroundColor: 0x0f0f10,
                    color: 0xffffff,
                    showDots: false,
                    points: 3,
                    THREE,
                }),
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    // todo: animate exclamation marks in title

    const handleTypewriter = (typewriter: TypewriterClass) => {
        typewriter.typeString('newtykins').start();
    };

    const frames = Array.from(
        Array(9),
        (_, x) => `./favicon/${x}.png?v=${Math.floor(Math.random() * 100000)}`,
    );

    return (
        <main>
            <Helmet>
                <title>newt!!</title>
            </Helmet>
            <Favicon url={frames} animated={true} animationDelay={75} />

            <div className="lg:p-40 md:p-28 p-16 md:pt-64">
                <div className="name flex flex-col w-full z-1">
                    <span className="text-silver lg:text-8xl md:text-6xl text-4xl font-extrabold pb-10">
                        <Typewriter onInit={handleTypewriter} />
                    </span>

                    <Song />
                </div>

                <span className="flex text-gray-400 lg:text-5xl md:text-4xl text-2xl font-bold lg:leading-loose leading-relaxed intro lg:pt-20 md:pt-16 pt-8 lg:w-3/5">
                    Student programmer providing simplistic solutions to modern
                    problems.
                </span>

                <footer className="flex text-gray-400 lg:pt-32 md:pt-32 pt-20">
                    <Social iconSize={'2x'} />
                </footer>
            </div>
        </main>
    );
}

export default App;
