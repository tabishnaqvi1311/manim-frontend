import * as React from 'react';
import { Twitter, Users2, Github } from 'lucide-react';

const openTabs = (links: string[]) => {
  links.forEach((url) => window.open(url, "_blank", "noopener,noreferrer"));
};

const JoinUsGrid: React.FC = () => (
  <div className="p-8 border border-gray-100 rounded-2xl shadow-xs w-full">
    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Join us</h2>

    <div className="grid grid-cols-3 grid-rows-3 gap-1 h-full">

      <button
        onClick={() =>
          openTabs([
            "https://github.com/tabishnaqvi1311/manimbot-backend",
            "https://github.com/tabishnaqvi1311/manim-frontend.git",
          ])
        }
        className="col-span-1 row-span-1 flex items-center justify-center p-6 bg-gray-100 backdrop-blur-sm border border-gray-900/20 rounded-2xl hover:bg-gray-600/20 hover:border-gray-500/50 transition duration-300 shadow-2xl"
      >
        <Github className="w-8 h-8 text-gray-800" />
      </button>

      <div className="col-span-1 row-span-1 p-6 bg-white/5 backdrop-blur-sm border border-gray-800/10 rounded-2xl opacity-70"></div>
      <div className="col-span-1 row-span-1 p-6 bg-white/5 backdrop-blur-sm border border-gray-800/10 rounded-2xl opacity-70"></div>

      <div className="col-span-1 row-span-1 p-6 bg-white/5 backdrop-blur-sm border border-gray-800/10 rounded-2xl opacity-70"></div>

      <button
        onClick={() =>
          openTabs([
            "https://x.com/gunhawke23",
            "https://x.com/SENachi27",
          ])
        }
        className="col-span-1 row-span-1 flex items-center justify-center p-6 bg-gray-100 backdrop-blur-sm border border-gray-900/20 rounded-2xl hover:bg-gray-600/20 hover:border-gray-500/50 transition duration-300 shadow-2xl"
      >
        <Twitter className="w-8 h-8 text-gray-800" />
      </button>

      <div className="col-span-1 row-span-1 p-6 bg-white/5 backdrop-blur-sm border border-gray-800/10 rounded-2xl opacity-70"></div>
      <div className="col-span-1 row-span-1 p-6 bg-white/5 backdrop-blur-sm border border-gray-800/10 rounded-2xl opacity-70"></div>
      <div className="col-span-1 row-span-1 p-6 bg-white/5 backdrop-blur-sm border border-gray-800/10 rounded-2xl opacity-70"></div>

      <button
        onClick={() =>
          openTabs([
            "https://tabishnaqvi.com/",
            "https://senachi.me/",
          ])
        }
        className="col-span-1 row-span-1 flex items-center justify-center p-6 bg-gray-100 backdrop-blur-sm border border-gray-900/20 rounded-2xl hover:bg-gray-600/20 hover:border-gray-500/50 transition duration-300 shadow-2xl"
      >
        <Users2 className="w-8 h-8 text-gray-800" />
      </button>

    </div>
  </div>
);

export default JoinUsGrid;
