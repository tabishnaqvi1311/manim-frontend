import * as React from "react";
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

interface ProductCardProps {
  title: string;
  description: string;
  className?: string;
  icon: React.ElementType<IconProps>; 
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  className,
  icon: IconComponent, 
}) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1 p-4 md:p-6 rounded-xl transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center space-x-3 mb-1">
        <IconComponent className="h-5 w-5 text-gray-800" />
        
        <h3 className="text-base font-bold text-black uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
};

export const BookIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-6 w-6", className)} 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.438 9.278 5 7.5 5S4.168 5.438 3 6.253v13C4.168 18.437 5.722 18 7.5 18s3.332.437 4.5 1.253m0-13C13.168 5.438 14.722 5 16.5 5s3.332.438 4.5 1.253v13C19.832 18.437 18.278 18 16.5 18s-3.332.437-4.5 1.253"
    />
  </svg>
);

export const VideoIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-6 w-6", className)} 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-1-4v4m-3-4v4m-3-4v4M3 21h18M3 10h18"
    />
  </svg>
);

export const MicIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-6 w-6", className)} 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 11a7 7 0 01-7 7v0A7 7 0 015 11M5 11a2 2 0 012-2h10a2 2 0 012 2M3 11l.01-.01M21 11l-.01-.01M12 22v-4m-7-2v4m14-4v4m0 0a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h14z"
    />
  </svg>
);

export const MusicIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-6 w-6", className)} 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19V6l12-3v13M9 19H3v-3M9 19a2 2 0 002 2h6a2 2 0 002-2v-3"
    />
  </svg>
);

export const TranslateIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-6 w-6", className)} 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.5 11c-2.072 0-3.953.534-5.548 1.49l-1 1M19 19c-1.398 0-2.825-.494-4-1.398M12 5l7.536 7.536-7.536 7.536"
    />
  </svg>
);