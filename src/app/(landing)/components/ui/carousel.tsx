import React, { useState, useRef } from "react";
import { Card } from "./card";
import { Button } from "@/components/ui/button";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const cards = [
        {
            id: 0,
            gradient: "from-[#4a9ac7] to-[#6b7fa8]",
            videoSrc: "/videos/sample1.mp4",
        },
        {
            id: 1,
            gradient: "from-[#805575] to-[#c76868]",
            videoSrc: "/videos/sample2.mp4",
        },
        {
            id: 2,
            gradient: "from-[#2d5a3d] to-[#4a7556]",
            videoSrc: "/videos/sample3.mp4",
        },
    ];

    const getCardStyle = (index: number) => {
        const position = (index - activeIndex + cards.length) % cards.length;

        switch (position) {
            case 0:
                return {
                    transform: "translateX(-20%) translateY(3%) scale(0.9)",
                    opacity: 0.7,
                    zIndex: 1,
                };
            case 1:
                return {
                    transform: "translateX(0) translateY(0) scale(1)",
                    opacity: 1,
                    zIndex: 10,
                };
            case 2:
                return {
                    transform: "translateX(20%) translateY(3%) scale(0.9)",
                    opacity: 0.7,
                    zIndex: 1,
                };
            default:
                return {};
        }
    };

    const handleCardClick = (index: number) => {
        if (index === activeIndex) return;

        videoRefs.current.forEach((video) => video?.pause());

        const total = cards.length;
        const nextIndex = index;

        const diff = (nextIndex - activeIndex + total) % total;
        if (diff === 1) {
            setActiveIndex((prev) => (prev - 1 + total) % total);
        } else if (diff === total - 1) {
            setActiveIndex((prev) => (prev + 1 + total) % total);
        }
    };

    const handlePlay = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        const targetVideo = videoRefs.current[index];
        if (targetVideo) {
            if (targetVideo.paused) {
                videoRefs.current.forEach((video, i) => {
                    if (video && i !== index) video.pause();
                });
                targetVideo
                    .play()
                    .catch((error) =>
                        console.error("Error playing video:", error),
                    );
            } else {
                targetVideo.pause();
            }
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="relative w-[320px] h-[380px]">
                {cards.map((card, index: number) => {
                    const style = getCardStyle(index);

                    return (
                        <div
                            key={card.id}
                            className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out cursor-pointer"
                            style={{
                                transform: `translate(-50%, -50%) ${style.transform}`,
                                opacity: style.opacity,
                                zIndex: style.zIndex,
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <Card
                                className="relative w-[340px] h-[340px] !p-0 border-[1px] border-black rounded-2xl overflow-hidden"
                                showGradient
                                gradient={card.gradient}
                            >
                                <video
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                    }}
                                    src={card.videoSrc}
                                    loop
                                    muted={false}
                                    className="w-full h-full object-fill absolute inset-0 rounded-2xl"
                                />

                                <Button
                                    onClick={(e) => handlePlay(e, index)}
                                    variant="outline"
                                    className="absolute bottom-4 left-4 bg-transparent text-white font-semibold px-4 py-2 rounded-lg shadow-lg z-20 hover:scale-[1.05] transition-transform"
                                >
                                    PLAY
                                </Button>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
