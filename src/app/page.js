"use client";
import Tool from "./components/tool";
import WriterText from "./components/homePage";
import Featured from "./components/featured";
import AiTool from "./components/AItool";
import RewriterTool from "./components/rewritertool";
// import FAQs from "./components/FAQ";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Questions from "./components/question";

const Index = () => {
  return (
    <>
      <Navbar />
      {/* <Tool/> */}
      {/* <AiTool /> */}
      <WriterText />
      <Featured />
      {/* <AiTool/> */}
      <RewriterTool />
      {/* <FAQs /> */}
      <Questions/>
      <Footer />
    </>
  );
};
export default Index;
