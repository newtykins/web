import type { NextPage } from 'next';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';

const Footer: NextPage = () => {
    return (
        <footer className="mt-12 dark:text-nord-4">
            <SocialIcon
                className="hover:text-red-600 mr-6"
                action="/shhh"
                aria-label="Heart"
                icon={faHeart}
                iconSize={1}
                shouldResize={false}
            />

            <SocialIcon
                action="https://github.com/newtykins/web"
                icon={faGithub}
                iconSize={1}
                shouldResize={false}
                aria-label="GitHub"
            />
        </footer>
    );
};

export default Footer;
