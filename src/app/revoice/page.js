"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const VideoRevoice = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div>
          <div className="flex justify-center items-center text-center mt-6">
            <div className="w-full sm:w-[600px] lg:w-[800px] mt-10">
              <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                <h1 className="text-2xl sm:text-3xl font-bold">Video Revoice</h1>
              </div>
            </div>
          </div>
          <div className="flex mt-5 w-full lg:max-w-[1220px] mx-auto p-7">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="p-6">
                <img
                  src="https://img.freepik.com/free-vector/video-conferencing-concept-illustration_114360-4761.jpg"
                  alt="Video Revoice Illustration"
                  className="shrink-0 w-[600px] h-[400px]"
                />
              </div>
              <div className="bg-slate-100">
                <div className="p-8">
                  <h1 className="text-3xl font-bold italic">
                    Enhance Your Videos with Revoice
                  </h1>
                  <p className="mt-4 italic">
                    The Video Revoice platform allows you to effortlessly replace, enhance, or edit the audio in your video files with precision and clarity.
                  </p>
                  <ul className="text-justify ml-6 mt-3">
                    <li className="mt-2">
                      <i className="fa-solid fa-square-check"></i> Replace audio in video files with custom voiceovers.
                    </li>
                    <li className="mt-2">
                      <i className="fa-solid fa-square-check"></i> Synchronize audio tracks seamlessly with your visuals.
                    </li>
                    <li className="mt-2">
                      <i className="fa-solid fa-square-check"></i> Apply noise reduction and audio effects for better quality.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Whether you're a content creator, educator, or just enhancing a personal video, our tools make the process easy and efficient. Experience the power of professional-grade audio editing, all within a user-friendly interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VideoRevoice;
