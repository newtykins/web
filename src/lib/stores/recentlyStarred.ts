import cache from '$lib/cache';

export interface Starred {
    displayName: string;
    url: string;
}

export const recentlyStarred = cache<Starred>(
    'starred',
    36000,
    async () =>
        await fetch('https://api.github.com/users/newtykins/starred')
            .then(res => res.json())
            .then(res => {
                const [recent] = res;

                return {
                    displayName: recent?.['full_name'],
                    url: `https://github.com/${recent?.['full_name']}`
                };
            })
);
