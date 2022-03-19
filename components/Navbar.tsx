import '@styles/Navbar.module.css';
import type { NextPage } from 'next';
import NavbarLink from './NavbarLink';
import { useRouter } from 'next/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';
import { useContext, useEffect, useRef } from 'react';
import Twitch from '@contexts/Twitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const Navbar: NextPage = () => {
    const router = useRouter();
    const liveStatus = useContext(Twitch);
    const menuButton = useRef<HTMLDivElement>();
    const navLinks = useRef<HTMLUListElement>();
    const socialIcons = useRef<HTMLDivElement>();

    const {
        theme: { screens }
    } = resolveConfig(tailwindConfig);

    const toggleMobileNavbar = (e: MouseEvent) => {
        if (navLinks.current.classList.contains('hidden')) {
            navLinks.current.classList.remove('hidden');
            navLinks.current.classList.add('navbarSlide');
        } else {
            navLinks.current.classList.add('hidden');
            navLinks.current.classList.remove('navbarSlide');
        }
    };

    useEffect(() => {
        const handleResize = () => {
            let breakpoint: string;

            Object.keys(screens).forEach(key => {
                if (window.innerWidth > parseInt(screens[key].split('px')[0])) {
                    breakpoint = key;
                }
            });

            breakpoint ??= 'sm';

            console.log(breakpoint);

            if (breakpoint === 'sm') {
                navLinks.current.classList.add('hidden');
                socialIcons.current.classList.add('hidden');
                menuButton.current.classList.remove('hidden');
            } else {
                navLinks.current.classList.remove('hidden');
                socialIcons.current.classList.remove('hidden');
                menuButton.current.classList.add('hidden');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);

    return (
        <header
            className="flex items-center flex-wrap justify-between relative mb-20 select-none mt-5"
            id="nav"
        >
            <button className="rainbow text-2xl mr-6 font-bold" onClick={() => router.push('/')}>
                newt!
            </button>

            <ul
                className="align-baseline sm:block flex-wrap md:flex md:items-center flex-grow p-0 md:bg-transparent"
                ref={navLinks}
            >
                <NavbarLink path="/" content="Home" />
                <NavbarLink path="/about" content="About Me" />
                <NavbarLink path="/social" content="Social" />
            </ul>

            <div className="md:text-right hidden" ref={menuButton}>
                <button
                    onClick={e => toggleMobileNavbar(e as unknown as MouseEvent)}
                    className="flex items-center px-3 py-3 text-gray-700 hover:text-gray-900"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div
                className="md:w-5/12 md:text-right flex items-center md:justify-end"
                ref={socialIcons}
            >
                <SocialIcon icon={faGithub} url="https://twitch.tv/newtykins" />
                <SocialIcon
                    icon={faTwitch}
                    url={`https://twitch.tv/${liveStatus?.username}`}
                    className={liveStatus?.live ? 'text-red-600 twitchAnim' : ''}
                    tooltip={liveStatus?.live ? 'I am live on Twitch, come and say hi!' : ''}
                />
            </div>
        </header>
    );
};

export default Navbar;
