import type { NextPage } from 'next';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';
import { useRouter } from 'next/router';

const Footer: NextPage = () => {
    const router = useRouter();

    return (
        <footer className="mt-12 dark:text-nord-4">
            <SocialIcon
                className="hover:text-red-600 mr-6"
                action={() => router.push('/shhh')}
                aria-label="Heart"
                icon={faHeart}
                iconSize={1}
                shouldResize={false}
            />

            <SocialIcon
                action="https://github.com/newtykins/web"
                className='hover:text-github'
                icon={faGithub}
                iconSize={1}
                shouldResize={false}
                aria-label="GitHub"
            />
        </footer>
    );
};

export default Footer;
