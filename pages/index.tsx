import type { NextPage } from 'next';
import { createRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min.js';
import Typewriter from 'typewriter-effect';
import Social from '~components/Social';
import Song from '~components/Song';
import Favicon from 'react-favicon';
import Head from 'next/head';

export enum Breakpoints {
    Small,
    Medium,
    Large,
}

const Home: NextPage = () => {
    const vantaRef = createRef<HTMLElement>();
    let vantaEffect: any;
    const [breakpoint, setBreakpoint] = useState<Breakpoints>();

    useEffect(() => {
        // Handle the VANTA animation
        if (!vantaEffect) {
            const { innerHeight: height, innerWidth: width } = window;

            // eslint-disable-next-line
            vantaEffect = NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: height,
                minWidth: width,
                backgroundColor: 0x0f0f10,
                color: 0xffffff,
                showDots: false,
                points: 3,
                THREE,
            });
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect, vantaRef]);

    useEffect(() => {
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                // Detect the breakpoint
                const { innerWidth: width } = window;

                if (width >= 1024) {
                    setBreakpoint(Breakpoints.Large);
                } else if (width >= 768) {
                    setBreakpoint(Breakpoints.Medium);
                } else {
                    setBreakpoint(Breakpoints.Small);
                }

                // Handle resizing of the window
                window.addEventListener('resize', () => {
                    if (vantaEffect) vantaEffect.resize();
                });

                document.onreadystatechange = null;
            }
        };
    }, [vantaEffect]);

    // todo: animate exclamation marks in title
    // todo: lightmode toggle

    const frames = Array.from(
        Array(9),
        (_, x) => `./favicon/${x}.png?v=${Math.floor(Math.random() * 100000)}`,
    );

    return (
        <main ref={vantaRef}>
            <Head>
                <title>newt!!</title>
                <script type="text/javascript" src="/noZoom.js" defer></script>
            </Head>

            <Favicon url={frames} animated={true} animationDelay={75} />

            <div className="lg:p-40 md:p-28 p-16 md:pt-64">
                <div className="name flex flex-col w-full z-1">
                    <span className="text-silver lg:text-8xl md:text-7xl text-4xl font-extrabold pb-10">
                        <Typewriter
                            onInit={(typewriter) =>
                                typewriter.typeString('newtykins').start()
                            }
                        />
                    </span>

                    <Song breakpoint={breakpoint as Breakpoints} />
                </div>

                <span className="flex text-gray-400 lg:text-5xl md:text-3xl text-2xl font-bold lg:leading-loose md:leading-loose leading-relaxed intro lg:pt-20 md:pt-16 pt-10 lg:w-3/5">
                    Student programmer providing simplistic solutions to modern
                    problems.
                </span>

                <footer className="flex text-gray-400 lg:pt-32 md:pt-32 pt-20">
                    <Social
                        iconSize={
                            breakpoint === Breakpoints.Small ? 'lg' : '2x'
                        }
                    />
                </footer>
            </div>
        </main>
    );
};

export default Home;
