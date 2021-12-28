import axios from 'axios';
import React, { useState } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import truncate from 'lodash.truncate';
import { Breakpoints } from '../index';

interface SongProps {
    breakpoint: Breakpoints;
}

// todo: add typewriter effect when changing songs
function Social({ breakpoint }: SongProps) {
    const [url, setUrl] = useState<string>();

    const handleTypewriter = (typewriter: TypewriterClass) => {
        axios.get(`${window.location.origin}/api/spotify`).then(({ data }) => {
            if (!data.message) {
                let artists: string = data.artists[0].name.toLowerCase();
                let song: string = data.name.toLowerCase();
                setUrl(data.url);

                // Truncate data depending on the breakpoint
                switch (breakpoint) {
                    case Breakpoints.Small:
                        song = truncate(song, { length: 40 - artists.length });
                        break;
                    case Breakpoints.Medium:
                        song = truncate(song, { length: 50 - artists.length });
                        break;
                    case Breakpoints.Large:
                        song = truncate(song, { length: 50 - artists.length });
                        artists = data.artists
                            .map((a: any) => a.name)
                            .join(', ')
                            .toLowerCase();
                }

                typewriter
                    .changeDelay(50)
                    .typeString(`♫ ${artists} - ${song}`)
                    .start();
            }
        });
    };

    return (
        <a
            href={url}
            className="text-silver lg:text-5xl md:text-4xl text-xl font-bold hover:underline"
        >
            <Typewriter
                onInit={handleTypewriter}
                options={{
                    cursor: '',
                }}
            />
        </a>
    );
}

export default Social;
