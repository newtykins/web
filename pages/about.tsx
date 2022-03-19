import type { NextPage } from 'next';
import React, { useContext } from 'react';
import Card from '@components/Card';
import { RankContext, RepoContext, SongContext } from './_app';
import config from '@utils/config';

const About: NextPage = () => {
    const currentSong = useContext(SongContext);
    const repoCount = useContext(RepoContext);
    const osuRank = useContext(RankContext);

    return (
        <React.Fragment>
            <h1 className="heading text-4xl">
                Hi, I'm <span className="rainbow">newt</span>.
            </h1>

            <span className="subheading text-xl">I do stuff on the internet sometimes.</span>

            <h2 className="heading text-3xl mt-10">
                Sometimes that stuff is pretty <span className="rainbow">cool</span>
            </h2>

            <div className="grid grid-flow-row justify-center items-center md:grid-flow-col gap-2">
                <Card header="GitHub Repos">
                    <a
                        href={`https://github.com/${config.credentials.github.username}`}
                        className="heading text-3xl hover:underline"
                    >
                        {repoCount ?? '...'}
                    </a>
                </Card>

                <Card header="osu! rank">
                    <a
                        href={`https://osu.ppy.sh/u/${config.credentials.osu.userId}`}
                        className="heading text-2xl hover:underline"
                    >
                        {`#${osuRank?.toLocaleString()}` ?? '...'}
                    </a>
                </Card>

                <Card header="Listening to">
                    <span className="font-bold text-xl">
                        {currentSong?.title ? (
                            <a href={currentSong?.url} className="hover:underline">
                                {currentSong?.artist} - {currentSong?.title}
                            </a>
                        ) : (
                            'nothing (:'
                        )}
                    </span>
                </Card>

                {/* todo: add anime watched and most played recently games (steam api) */}
            </div>
        </React.Fragment>
    );
};

export default About;
