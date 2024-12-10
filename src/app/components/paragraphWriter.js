import { Textparagraph } from "../dataset/data";
import Card from "./card";

const WriterText = () => {
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

        {/* Paragraph Section */}
        {/* <div className="flex justify-center items-center text-center">
          <div className="w-full sm:w-[600px] lg:w-[1200px] p-10">
            <div className="mt-5 w-full lg:max-w-[1320px]">
              <div className="mt-8 p-2 border border-gray-300">
                <div className="p-8">
                  {Textparagraph.map((el, idx) => (
                    <div key={idx} className="mt-5">
                      <h1 className="text-2xl sm:text-3xl font-bold">
                        {el.title}
                      </h1>
                      <p className="text-md sm:text-lg mt-3">{el.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default WriterText;
