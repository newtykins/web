import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { steam } from '$lib/credentials';
import { steam as endpoints } from '$lib/endpoints';
import SteamAPI from 'steamapi';
import formatDate from '$lib/formatDate';
import countries from 'i18n-iso-countries';
import humanise from '$lib/humanise';

const communityId = /^[0-9]*$/;
const client = new SteamAPI(steam.apiKey);

const getSteamId = async (input: string) => {
    const isCommunityId = communityId.test(input);

    if (isCommunityId) {
        return input;
    } else {
        const params = new URLSearchParams({
            vanityurl: input,
            key: steam.apiKey
        });

        const {
            response: { steamid }
        } = await fetch(`${endpoints.getId}?${params}`).then(res => res.json());

        return steamid;
    }
};

export const GET: RequestHandler = async ({ url }) => {
    const id = url.searchParams.get('id');
    const steamId = await getSteamId((id as string) ?? steam.userId);

    // Fetch the user's data
    const {
        nickname,
        avatar,
        url: profileUrl,
        created: createdTimestamp,
        lastLogOff: lastLogOffTimestamp,
        countryCode
    } = (await client.getUserSummary(steamId)) as unknown as SteamAPI.PlayerSummary;

    const createdAt = formatDate(createdTimestamp);
    const lastLogOff = formatDate(lastLogOffTimestamp);

    const [{ playTime, playTime2, ...mostPlayedRecently }] = await client.getUserRecentGames(
        steamId
    );

    const timePlayedInMs = playTime * 60000;

    return json({
        steamId,
        nickname,
        avatar,
        url: profileUrl,
        createdAt,
        lastLogOff,
        country: countries.getName(countryCode as string, 'en'),
        mostPlayedRecently: {
            ...mostPlayedRecently,
            timePlayedInMs,
            humanTimePlayed: humanise(timePlayedInMs)
        }
    });
};
