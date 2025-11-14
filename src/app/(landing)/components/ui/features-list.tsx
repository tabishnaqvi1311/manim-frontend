import * as React from 'react';
import { Check } from 'lucide-react';


export interface Feature {
  id: number;
  text: string;
  isHighlight: boolean;
}

const FeaturesList: React.FC<{ features: Feature[] }> = ({ features }) => (
  <div className="flex-1 p-4 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Feynman?</h2>
    <div className="space-y-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex items-center p-4 rounded-xl transition duration-300 
            ${feature.isHighlight 
              ? 'bg-gray-100 border border-gray-200 shadow-md' 
              : 'border border-gray-300 hover:bg-gray-50'
            }`
          }
        >
          <div className={`p-1 mr-4 rounded-lg w-8 h-8 border flex items-center justify-center 
            ${feature.isHighlight ? 'bg-gray-400 border-gray-400' : 'bg-gray-300 border-gray-300'}`}>
            <Check className={`w-4 h-4 
              ${feature.isHighlight ? 'text-white' : 'text-gray-600'}`} />
          </div>
          <p className={`font-medium 
            ${feature.isHighlight ? 'text-gray-900' : 'text-gray-700'}`}>
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesList;