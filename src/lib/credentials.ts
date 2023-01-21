import { env } from '$env/dynamic/private';

const spotify = {
    clientId: env.SPOTIFY_CLIENT_ID,
    clientSecret: env.SPOTIFY_CLIENT_SECRET,
    refreshToken: env.SPOTIFY_REFRESH_TOKEN
};

const osu = {
    apiKey: env.OSU_API_KEY 
}

export { spotify, osu };

export default {
    spotify, osu
};
