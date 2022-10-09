import type { NextPage } from 'next';
import React, { useContext } from 'react';
import {
    faDiscord,
    faGithub,
    faSpotify,
    faTwitch,
    faSteam
} from '@fortawesome/free-brands-svg-icons';
import SocialIcon from '@components/SocialIcon';
import Twitch from '@contexts/Twitch';
import config from '@utils/config';
import Image from 'next/image';

const Social: NextPage = () => {
    const liveStatus = useContext(Twitch);

    return (
        <React.Fragment>
            <h1 className="heading text-4xl">
                Let's get in <span className="rainbow">touch</span> (:
            </h1>

            <br />

            <span className="subheading text-xl">
                Just in case you want to know about all of the random things I do!
            </span>

            <div className="mt-10 mb-10">
                <SocialIcon icon={faDiscord} className='mr-6' action="https://discord.gg/brEhN5Y7YK" iconSize={4} />

                <SocialIcon
                    icon={faSpotify}
                    className='mr-6'
                    action="https://open.spotify.com/user/31f5j3pn6dafanybum4r4fwsppea?si=f2628f2bf1b74f15"
                    iconSize={4}
                />

                <SocialIcon
                    icon={faGithub}
                    className='mr-6'
                    action={`https://github.com/${config.credentials.github.username}`}
                    iconSize={4}
                />

                <SocialIcon
                    icon={faTwitch}
                    action={`https://twitch.tv/${liveStatus?.username}`}
                    className={`mr-6 ${liveStatus?.live ? 'text-red-600' : ''}`}
                    tooltip={liveStatus?.live ? 'I am live on Twitch, come and say hi!' : ''}
                    iconSize={4}
                />

                <SocialIcon
                    icon={faSteam}
                    action="https://steamcommunity.com/id/newtykins/"
                    iconSize={4}
                />
            </div>

            <Image src="/img/doubloons.png" width={250} height={250} className="rounded-3xl" />
        </React.Fragment>
    );
};

export default Social;
