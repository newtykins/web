import { env } from '$env/dynamic/private';

const spotify = {
    clientId: env.SPOTIFY_CLIENT_ID,
    clientSecret: env.SPOTIFY_CLIENT_SECRET,
    refreshToken: env.SPOTIFY_REFRESH_TOKEN
};

const steam = {
    apiKey: env.STEAM_API_KEY,
    userId: '76561198163553688'
}

export { spotify, steam };

export default {
    spotify, steam
};
