import { Textparagraph } from "../dataset/data";
import Card from "./card";

const Homepagesection = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/img/bg1.avif')", // Replace with your image URL
        }}
      >
        <div className="text-center px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Voice Flux Platform for the Transformation of Voice
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Our platform leverages advanced AI technologies to transform and
            translate voices across multiple languages with precision and speed.
            Experience seamless voice-to-voice translations, making global
            communication effortless and engaging.
          </p>
          
        </div>
      </section>

      {/* section 2,3 video and audio */}
      <div className="container-fluid p-0">
        {/* Cards Section Start */}
        <div className="flex flex-col mt-2 w-full lg:max-w-[1320px] mx-auto">
          <Card />
        </div>

      </div>
    </>
  );
};
export default Homepagesection;
