import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import SpotifyWebApi from 'spotify-web-api-node';
import { env } from '$env/dynamic/private';
import humanise from '$lib/humanise';

const spotify = new SpotifyWebApi({
	clientId: env.SPOTIFY_CLIENT_ID,
	clientSecret: env.SPOTIFY_CLIENT_SECRET,
	refreshToken: env.SPOTIFY_REFRESH_TOKEN
});

// Refreshes and updates the client's access token
const refreshAccessToken = async () => {
	const { access_token } = (await spotify.refreshAccessToken()).body;

	spotify.setAccessToken(access_token);
}

// Filters artist data
const artistFilter = (artist: SpotifyApi.ArtistObjectSimplified) => {
    return {
        name: artist.name,
        id: artist.id,
        url: artist.external_urls.spotify
    };
};

export const GET: RequestHandler = async () => {
	await refreshAccessToken(); // todo: figure out a more effective way to refresh the access token

	const { is_playing: isPlaying, item: track } = (await spotify.getMyCurrentPlayingTrack({ market: 'GB' })).body as { is_playing: boolean, item: SpotifyApi.TrackObjectFull };

	if (track && isPlaying) {
		const {
            name,
            album,
            duration_ms,
            track_number: trackNumber,
            preview_url: preview,
            id
        } = track;

        const filteredAlbum = {
            name: album.name,
            url: album.external_urls.spotify,
            id: album.id,
            releaseDate: album['release_date'],
            trackCount: album['total_tracks'],
            covers: album.images,
            artists: album['artists'].map(artistFilter)
        };

        const artists = track.artists.map(artistFilter);

        return json({
            name,
            id,
            album: filteredAlbum,
            artists,
            durationInMs: duration_ms,
            humanDuration: humanise(duration_ms),
            trackNumber,
            preview,
            url: track.external_urls.spotify
        });
	}
	
	return json({
		message: 'newt is not currently listening to anything!'
	});
}
