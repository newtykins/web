import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const videoCount = 8;

const videos = Array.from(
    Array(videoCount),
    (_, x) => `./video/${x + 1}.mp4`
);

const Shhh: NextPage = () => {
    const [videoIndex, setVideoIndex] = useState<number>(null);

    const dynamicRoute = useRouter().asPath;

    useEffect(() => {
        let newIndex = videoIndex;
        console.log(videos)

        while (newIndex == videoIndex) {
            newIndex = Math.floor(Math.random() * videos.length);
        }

        setVideoIndex(newIndex);
    }, [dynamicRoute]);

    return (
        <React.Fragment>
            <h1 className="text-3xl heading">
                You have found the <span className="rainbow">treasure</span>
            </h1>

            <span className="subheading text-xl">Enjoy this video as a reward (:</span>

            <br />

            <span className='subheading text-sm'>Video {videoIndex + 1}/{videoCount}</span>

            <div className="flex justify-center mt-10">
                <video src={videos[videoIndex]} height={500} width={500} autoPlay loop controls></video>
            </div>
        </React.Fragment>
    );
};

export default Shhh;
