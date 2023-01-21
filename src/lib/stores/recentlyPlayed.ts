import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface Game {
    displayName: string;
    url: string;
    expires: number;
}

export const recentlyPlayed = writable<Game | null>(
    browser ? JSON.parse(localStorage.getItem('recentlyPlayed') as string) ?? null : null
);

recentlyPlayed.subscribe(value => {
    if (browser) localStorage.recentlyPlayed = JSON.stringify(value);
});
