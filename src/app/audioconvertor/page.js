import React from 'react'
import AiTool from '../components/AItool'
import Homepagesection from '../components/homePage';
import Featured from '../components/featured';
import RewriterTool from '../components/rewritertool';
import FAQs from '../components/FAQ';
import Footer from '../components/footer';
import GeneratoraudioTool from '../components/generatorTool';
const AudioConvertor = () => {
  return (
    <>
       
        {/* <AiTool/> */}
        <GeneratoraudioTool/>
       <Homepagesection/>
       <Featured/>
       <RewriterTool/>
       <FAQs/>
       <Footer/>
    </>
  )
}

export default AudioConvertor;
