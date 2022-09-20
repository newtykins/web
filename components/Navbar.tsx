import '@styles/Navbar.module.css';
import type { NextPage } from 'next';
import NavbarLink from './NavbarLink';
import { useRouter } from 'next/router';
import { faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';
import React, { useContext, useRef } from 'react';
import Twitch from '@contexts/Twitch';
import getBreakpoint from '@utils/getBreakpoint';
import useResize from '@hooks/useResize';
import useLoaded from '@hooks/useLoaded';
import ThemeToggle from './ThemeToggle';

const Navbar: NextPage = () => {
    const router = useRouter();
    const liveStatus = useContext(Twitch);
    const navLinks = useRef<HTMLUListElement>();
    const socialIcons = useRef<HTMLDivElement>();
    const loaded = useLoaded();

    useResize(() => {
        const breakpoint = getBreakpoint();

        if (breakpoint !== 'sm') {
            socialIcons.current.classList.remove('hidden');
        } else {
            socialIcons.current.classList.add('hidden');
        }
    });

    return (
        <header
            className="flex items-center flex-wrap justify-between relative mb-20 select-none mt-5 font-quicksand"
            id="nav"
        >
            <button className="rainbow text-2xl mr-6 font-bold tracking-wider" onClick={() => router.push('/')}>
                newt!
            </button>

            <ul
                className="align-baseline flex-wrap flex md:items-center flex-grow md:bg-transparent"
                ref={navLinks}
            >
                <NavbarLink path="/" content="Home" />
                <NavbarLink path="/about" content="About Me" />
                <NavbarLink path="/social" content="Social" />
                <NavbarLink path="/blog" content="Blog" />
            </ul>

            <div
                className="md:w-5/12 md:text-right items-center md:justify-end hidden"
                ref={socialIcons}
            >
                <SocialIcon icon={faGithub} action="https://github.com/newtykins" aria-label="GitHub" />
                <SocialIcon
                    icon={faTwitch}
                    action={`https://twitch.tv/${liveStatus?.username}`}
                    className={liveStatus?.live ? 'text-red-600 twitchAnim' : ''}
                    tooltip={liveStatus?.live ? 'I am live on Twitch, come and say hi!' : ''}
                    aria-label="Twitch"
                />

                {loaded ? <ThemeToggle /> : <React.Fragment />}
            </div>
        </header>
    );
};

export default Navbar;
