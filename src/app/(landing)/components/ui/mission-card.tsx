import * as React from "react";
import { Disc } from "lucide-react";

const MissionCard: React.FC = () => (
  <div className="p-8 border border-gray-200 rounded-2xl shadow-xl w-full">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-white border border-gray-300 rounded-full text-gray-700">
        <Disc className="w-6 h-6" />
      </div>
    </div>
    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Mission</h2>
    <p className="text-gray-700 text-base mb-8 leading-relaxed">
      Our mission is to democratize understanding by transforming any idea into
      a clear, intuitive, visually rich explanation. Through a multimodal blend
      of AI, animation, and expressive narration, we make conceptual learning
      accessible to everyone. Feynman empowers people to turn natural language
      queries into dynamic educational videos, ensuring knowledge is not only
      available but genuinely understandable.
    </p>
    <a
      href="#"
      className="inline-flex items-center justify-center w-full py-3 px-6 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded-xl transition duration-300 shadow-sm hover:bg-gray-50"
    >
      About
    </a>
  </div>
);

export default MissionCard;
