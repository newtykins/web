import cache from '$lib/cache';
import urls from '$lib/urls';

export interface Game {
    displayName: string;
    url: string;
}

export const recentlyPlayed = cache<Game>(
    'recentlyPlayed',
    36000,
    async () =>
        await fetch(`${urls.domain}/api/steam`)
            .then(res => res.json())
            .then(res => {
                return {
                    displayName: res?.gameName,
                    url: res?.url
                };
            })
);
