import { createContext } from 'react';

interface Song {
    artist: string;
    title: string;
    url: string;
}

export type { Song };
export default createContext<Song>(null);
