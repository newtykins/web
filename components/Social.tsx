import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faGithub,
    faSpotify,
    faSteam,
    faTwitch,
} from '@fortawesome/free-brands-svg-icons';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';

interface SocialProps {
    iconSize: SizeProp;
}

function Social({ iconSize }: SocialProps) {
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        if (!isLive) {
            checkIfLive();
        }
    }, [isLive]);

    const checkIfLive = async () => {
        const { data } = await axios.get(
            `${window.location.origin}/api/twitch`,
        );

        setIsLive(data['stream'] ? true : false);
    };

    return (
        <ul className="inline space-x-4 lg:space-x-8 w-max">
            <a href="https://git.newtt.me/" className="hover:text-silver">
                <FontAwesomeIcon icon={faGithub} size={iconSize} />
            </a>
            <a
                href="https://twitch.newtt.me/"
                className={
                    isLive
                        ? 'text-purple-500 hover:text-purple-400'
                        : 'hover:text-silver'
                }
            >
                <FontAwesomeIcon icon={faTwitch} size={iconSize} />
            </a>
            <a
                href="https://discord.gg/brEhN5Y7YK"
                className="hover:text-silver"
            >
                <FontAwesomeIcon icon={faDiscord} size={iconSize} />
            </a>
            <a href="https://spotify.newtt.me/" className="hover:text-silver">
                <FontAwesomeIcon icon={faSpotify} size={iconSize} />
            </a>
            <a href="https://steam.newtt.me/" className="hover:text-silver">
                <FontAwesomeIcon icon={faSteam} size={iconSize} />
            </a>
        </ul>
    );
}

export default Social;
