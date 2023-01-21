import { env } from '$env/dynamic/private';

const spotify = {
    clientId: env.SPOTIFY_CLIENT_ID,
    clientSecret: env.SPOTIFY_CLIENT_SECRET,
    refreshToken: env.SPOTIFY_REFRESH_TOKEN
};

const wakatime = {
    apiKey: env.WAKATIME_API_KEY
};

export { spotify, wakatime };

export default {
    spotify,
    wakatime
};
