import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import Carousel from "./ui/carousel";
import Conversation from "./ui/conversation";

export default function About() {
  return (
    <section className="flex justify-center py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full place-items-center">
        <Card className="relative flex flex-col items-center justify-start bg-[#f3f3f3] h-[700px] w-xl overflow-hidden pt-12">
          <div className="mb-2">
            <Carousel />
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-4xl px-8 mt-2 mb-5">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              The most expressive text to video model
            </h2>

            <p className="text-base leading-relaxed text-gray-600 mb-6 max-w-2xl">
              Our model turns explanations into cinematic, expressive video narratives — engineered for clarity and depth. Available in Alpha.
            </p>

            <div className="flex justify-center space-x-4">
              <Button className="bg-black text-white font-extrabold rounded-lg px-8 py-3 hover:bg-gray-800 shadow-lg">
                DISCOVER FEYNMAN V1
              </Button>
              <Button className="rounded-lg border-white bg-white text-black px-8 py-3 hover:bg-gray-100">
                SIGN UP
              </Button>
            </div>
          </div>
        </Card>

        <Card className="text-center h-[700px] flex flex-col justify-start overflow-hidden !p-0 bg-gradient-to-b from-blue-100 to-gray-200">
          <div className="relative flex flex-col items-center w-full h-[65%]">
            <Conversation />
          </div>

          <div className="w-full flex-1 flex flex-col justify-center items-center p-2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Serverless Agent
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-6 max-w-md mx-auto">
              Speak to Feynman locally with ease, understanding concepts at each step.
            </p>

            <div className="flex justify-center space-x-4">
              <Button className="bg-black text-white font-extrabold rounded-lg px-8 py-3 hover:bg-gray-800 shadow-lg">
                DISCOVER SERVERLESS AGENTS 
              </Button>
              <Button className="rounded-lg border-gray-200 bg-white text-black px-8 py-3 hover:bg-gray-100 border">
                CONTACT US
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
