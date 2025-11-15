import * as React from "react";
import { ResearchCard } from "./ui/research-card";

export default function ResearchComponent() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase text-black mb-2 tracking-widest">
          OUR LATEST FINDINGS
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 max-w-3xl">
          Advancing the State-of-the-Art in Generative Video
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 lg:items-start">
          <div className="lg:col-span-5 flex justify-center lg:justify-start pt-8">
            <ResearchCard
              title="Feynman - A Novel Conversational Framework for On-Demand &
Pedagogical Video Generation Using Gemini & Manim"
              author="S. Chakraborty, T. Naqvi, & S. Pala"
              year={2025}
            />
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Breakthroughs in Concept-Driven Visual Synthesis
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              This research explores a next-generation text-to-video system
              designed to produce highly expressive and natural-sounding
              narrative outputs within educational animations. Building on a
              multimodal training pipeline, the model learns to encode subtle
              communicative cues—such as emotional tone, pacing, and
              emphasis—into its generated audiovisual sequences. Rather than
              limiting narration to static or monotone delivery, the system
              synthesizes dynamic, lifelike voiceovers that closely mirror human
              explanatory speech.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="flex-shrink-0 text-black mr-2 mt-1">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p>
                  The system demonstrates a 4.7 MOS (Mean Opinion Score),
                  narrowing the performance gap with human-level expressive
                  narration and significantly improving the realism of
                  educational voiceovers.
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-black mr-2 mt-1">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p>
                  A novel Style-Separation Attention module was introduced,
                  enabling fine-grained control over prosody, emotional tone,
                  and explanatory emphasis within generated video narrations.
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-black mr-2 mt-1">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p>
                  These findings directly support the advancement of Feynman’s
                  next-generation audiovisual generation pipeline, informing the
                  design of a more adaptive and expressive narration API for
                  dynamic educational videos.
                </p>
              </li>
            </ul>

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Feynman - Research Paper.pdf";
                link.download = "Feynman - Research Paper.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="mt-8 bg-black text-white font-extrabold rounded-lg px-8 py-3 hover:bg-gray-800 transition text-base shadow-lg"
            >
              DOWNLOAD FULL PAPER (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
