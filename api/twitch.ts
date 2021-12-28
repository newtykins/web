import axios from 'axios';
import languages from 'iso-language-converter';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import config from '../apiHelpers/config';

const getAccessToken = async (): Promise<string> => {
    const { data } = await axios.post(
        `${config.endpoints.twitch.getAccessToken}?client_id=${config.credentials.twitch.clientId}&client_secret=${config.credentials.twitch.clientSecret}&grant_type=client_credentials`,
    );

    return data['access_token'];
};

const getTwitchStream = async (
    query: string = config.credentials.twitch.newtId,
    headers: Record<string, string>,
) => {
    const params = new URLSearchParams();

    if (isNaN(query as any)) {
        params.append('user_login', query);
    } else {
        params.append('user_id', query);
    }

    const {
        data: { data },
    } = await axios.get(`${config.endpoints.twitch.getStream}?${params}`, {
        headers,
    });

    const stream: any = data[0];

    if (stream) {
        return {
            title: stream.title,
            viewerCount: stream.viewer_count,
            startedAt: stream.started_at,
            language: languages(stream.language),
            thumbnail: stream.thumbnail_url,
            isMature: stream.is_mature,
        };
    } else {
        return null;
    }
};

const getTwitchUser = async (
    query: string = config.credentials.twitch.newtId,
) => {
    const token = await getAccessToken();
    const params = new URLSearchParams();
    const headers = {
        Authorization: `Bearer ${token}`,
        'Client-Id': config.credentials.twitch.clientId as string,
    };

    if (isNaN(query as any)) {
        params.append('login', query);
    } else {
        params.append('id', query);
    }

    try {
        const {
            data: { data },
        } = await axios.get(`${config.endpoints.twitch.getUser}?${params}`, {
            headers,
        });

        const streamer: any = data[0];
        const stream = await getTwitchStream(query, headers);

        if (streamer) {
            return {
                id: parseInt(streamer.id),
                username: streamer.display_name,
                broadcasterType: streamer.broadcaster_type,
                description: streamer.description,
                images: {
                    profilePicture: streamer.profile_image_url,
                    offline: streamer.offline_image_url,
                },
                viewCount: streamer.view_count,
                createdAt: streamer.created_at,
                stream,
            };
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
};

export default async (req: VercelRequest, res: VercelResponse) => {
    const { q } = req.query;
    const user = await getTwitchUser(q as string);

    if (!user) {
        return res.json({
            message: `I could not find an active user on Twitch with the ${
                isNaN(q as any) ? 'username' : 'id'
            } ${q}!`,
        });
    }

    return res.json(user);
};
