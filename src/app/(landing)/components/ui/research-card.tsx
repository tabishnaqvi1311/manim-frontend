import * as React from "react";

interface ResearchCardProps {
  title: string;
  author: string;
  year: number;
}

export function ResearchCard({ title, author, year }: ResearchCardProps) {
  return (
    <div className="relative w-full max-w-sm">
      <div className="transform -rotate-6 transition duration-300 hover:rotate-0 hover:scale-[1.02] origin-bottom-left shadow-2xl bg-white border border-gray-100 rounded-lg overflow-hidden">
        <div
          className="h-64 md:h-80 bg-cover bg-center"
          style={{
            backgroundImage: "url('/paper-preview.svg')",
          }}
        ></div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase text-black tracking-wider mb-2 block">
              RESEARCH PAPER
            </span>
            <h3 className="text-xl font-bold text-gray-900 leading-snug line-clamp-3">
              {title}
            </h3>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500 font-medium mb-2">
              By: {author}
            </p>
            <p className="text-xs text-gray-400">Published: {year}</p>

            <div className="flex gap-2 mt-4">
              <a
                href="/Feynman - Research Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-black hover:bg-gray-800 px-3 py-1 rounded-full transition"
              >
                READ PREVIEW
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-300 transform -skew-y-6 z-0"></div>
      <div className="absolute -bottom-4 -left-3 w-8 h-8 bg-gray-200 rounded-sm transform rotate-12 -skew-x-3 z-0"></div>
      <div className="absolute -bottom-4 -right-3 w-8 h-8 bg-gray-400 rounded-sm transform rotate-12 -skew-x-3 z-0"></div>
      <div className="absolute top-0 -left-6 w-6 h-6 bg-gray-300 rounded-sm transform -rotate-45 z-0"></div>
      <div className="absolute top-12 -right-4 w-2 h-2 bg-gray-400 rounded-full z-0"></div>
      <div className="absolute top-12 -left-4 w-2 h-2 bg-gray-400 rounded-full z-0"></div>
      <div className="absolute bottom-12 -right-2 w-2 h-2 bg-gray-400 rounded-full z-0"></div>
      <div className="absolute bottom-12 -left-2 w-2 h-2 bg-gray-400 rounded-full z-0"></div>
    </div>
  );
}
