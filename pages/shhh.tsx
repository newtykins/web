import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const videos = Array.from(
    Array(8),
    (_, x) => `./video/${x}.mp4`
);

const Shhh: NextPage = () => {
    const [video, setVideo] = useState<string>(null);
    const dynamicRoute = useRouter().asPath;

    useEffect(() => {
        let newVideo = video;

        while (newVideo == video) {
            newVideo = videos[Math.floor(Math.random() * videos.length)];
        }

        setVideo(newVideo);
    }, [dynamicRoute]);

    return (
        <React.Fragment>
            <h1 className="text-3xl heading">
                You have found the <span className="rainbow">treasure</span>
            </h1>

            <span className="subheading text-xl">Enjoy this video as a reward (:</span>

            <div className="flex justify-center mt-10">
                <video src={video} height={500} width={500} autoPlay loop controls></video>
            </div>
        </React.Fragment>
    );
};

export default Shhh;
