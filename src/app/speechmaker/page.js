"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SpeechMaker = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="flex justify-center items-center text-center mt-6">
          <div className="w-full sm:w-[600px] lg:w-[800px] mt-10">
            <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
                Speech Maker
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Transform your text into high-quality speech with ease. Explore our easy-to-use tool to convert text to speech in multiple languages and voices.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-10 w-full lg:max-w-[1220px] mx-auto p-7">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
            {/* Left Section - Image */}
            <div className="bg-blue-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://img.freepik.com/free-vector/speech-bubbles-icons_23-2147602192.jpg"
                alt="Speech Maker"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Right Section - Text Content */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-blue-600">About Speech Maker</h2>
              <p className="mt-5 text-lg text-gray-700">
                Speech Maker is a powerful tool designed to help you create high-quality audio from text. Whether you're creating content for social media, adding voiceovers to your videos, or assisting with accessibility, our platform makes it easy.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li className="mt-2">Convert text to audio in multiple languages.</li>
                <li className="mt-2">Choose from various voices and accents.</li>
                <li className="mt-2">Customizable speech speed and tone for optimal control.</li>
                <li className="mt-2">Download your speech files in MP3 or WAV format.</li>
              </ul>
              <p className="mt-5 text-lg text-gray-700">
                Our mission is to make text-to-speech technology accessible, fast, and easy to use for everyone. Start making your speech now!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpeechMaker;
