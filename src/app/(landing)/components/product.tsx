import * as React from "react";
import {
  ProductCard,
  BookIcon,
  VideoIcon,
  TranslateIcon,
  MicIcon,
  MusicIcon,
} from "./ui/product-card";

export default function Product() {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("CONCEPTS");

  const videos: Record<string, string> = {
    CONCEPTS: "/videos/concepts.mp4",
    VISUALS: "/videos/visuals.mp4",
    DOMAINS: "/videos/domains.mp4",
    "APPLIED SCIENCES": "/videos/applied.mp4",
    "STATE OF ART": "/videos/state.mp4",
  };

  const isSelected = (topic: string) =>
    selectedTopic === topic ? "product-selected" : "product-unselected";

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase text-black mb-2 tracking-widest">
          FOR STUDENTS, TEACHERS & EDUCATORS
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 max-w-3xl">
          Generate high-quality videos with Feynman for concpets, visuals, and
          domains
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
          <div className="space-y-3 lg:col-span-6 lg:pr-18">
            {[
              {
                key: "CONCEPTS",
                icon: BookIcon,
                desc: "Generate high quality videos for any concept. Feynman simplifies concpets into intuitive animatons for understanding.",
              },
              {
                key: "VISUALS",
                icon: VideoIcon,
                desc: "Visuals for everyday concepts. Explain at each step make learning easier.",
              },
              {
                key: "DOMAINS",
                icon: TranslateIcon,
                desc: "Generate videos for more than 30+ domains while preserving the core of it. Stay in existing domain or collaborate across others.",
              },
              {
                key: "APPLIED SCIENCES",
                icon: MicIcon,
                desc: "Use core tags to clear up any confussion in any topic, or Text to Video to generate short segments or full animations with multiple topics.",
              },
              {
                key: "STATE OF ART",
                icon: MusicIcon,
                desc: "Generate studio-quality videos instantly, any genre, inspired by 3 Blue 1 Brown, in minutes using simple text prompts.",
              },
            ].map((item) => (
              <div
                key={item.key}
                onClick={() => setSelectedTopic(item.key)}
                className={`product-topic ${isSelected(item.key)}`}
              >
                <ProductCard
                  title={item.key}
                  description={item.desc}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>

          <div
            key={selectedTopic}
            className="product-video-container animate-fadeZoom lg:col-span-4"
          >
            <video
              src={videos[selectedTopic]}
              className="w-full h-full object-fit scale-100 rounded-2xl shadow-xl bg-black"
              controls
              autoPlay
            />
          </div>
        </div>
      </div>
    </section>
  );
}
