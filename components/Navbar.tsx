import '@styles/Navbar.module.css';
import type { NextPage } from 'next';
import NavbarLink from './NavbarLink';
import { useRouter } from 'next/router';
import { faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';
import NavbarIcon from './NavbarIcon';
import { useContext } from 'react';
import { LiveContext } from 'pages/_app';

const Navbar: NextPage = () => {
    const router = useRouter();
    const liveStatus = useContext(LiveContext);

    return (
        <header className="flex items-center flex-wrap justify-between relative mb-20" id="nav">
            <button className="rainbow text-2xl mr-6 font-bold" onClick={() => router.push('/')}>
                newt!
            </button>

            <ul className="align-baseline sm:block flex-wrap md:flex md:items-center flex-grow py-4 px-2 md:p-0 md:bg-transparent">
                <NavbarLink path="/" content="Home" />
                <NavbarLink path="/about" content="About Me" />
            </ul>

            <div className="md:w-5/12 md:text-right flex items-center md:justify-end">
                <NavbarIcon icon={faGithub} url="https://twitch.tv/newtykins" />
                <NavbarIcon
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
