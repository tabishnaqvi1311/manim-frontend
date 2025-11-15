import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
       <div
        className="absolute -top-10 -left-10 w-[45vw] h-[45vh] bg-[radial-gradient(circle_at_top_left,rgba(100,80,255,0.4),transparent_70%)] blur-3xl pointer-events-none transition-all duration-100 ease-out"
      />
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-[radial-gradient(circle_at_top_right,rgba(80,60,220,0.35),transparent_70%)] blur-3xl pointer-events-none transition-all duration-100 ease-out"
      />
      <SignUp />
    </div>
  );
}