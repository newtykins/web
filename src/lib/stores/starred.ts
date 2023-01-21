import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface Starred {
    displayName: string;
    url: string;
    expires: number;
}

export const starred = writable<Starred | null>(
    browser ? JSON.parse(localStorage.getItem('starred') as string) ?? null : null
);

starred.subscribe(value => {
    if (browser) localStorage.starred = JSON.stringify(value);
});
