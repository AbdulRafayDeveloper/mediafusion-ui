"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import UploadIcon from "@mui/icons-material/Upload";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const speedvalue = [
  { value: "no", label: "Normal" },
  { value: "125", label: "1.25x" },
  { value: "15", label: "1.5x" },
  { value: "175", label: "1.75x" },
  { value: "2", label: "2x" },
];
const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

const GeneratoraudioTool = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleWordLimit = (e) => {
    const inputText = e.target.value;
    const words = inputText.split(/\s+/).filter((word) => word.length > 0);
    if (words.length <= 1500) {
      setText(inputText);
      setWordCount(words.length);
    } else {
      alert("You can only write up to 1500 words.");
    }
  };

  // Voice upload
  const [fileName, setFileName] = useState("");
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "audio/mpeg" || file.type === "audio/wav")) {
      setFileName(file.name);
      Swal.fire({
        icon: "success",
        title: "File uploaded successfully",
        text: `Uploaded: ${file.name}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid File",
        text: "Only .mp3 or .wav files are supported!",
      });
    }
  };

  // Voice speed
  const [selectedspeed, setSelectedspeed] = useState("no");
  const handlespeed = (event) => {
    setSelectedspeed(event.target.value);
  };

  // Language to convert
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  // convert audio
  const handleConvertAudio = () => {
    alert("Audio conversion is in progress!");
  };
  // download audio
  const handleDownloadAudio = () => {
    const link = document.createElement("a");
    link.href = "/path/to/converted-audio.mp3";
    link.download = "converted-audio.mp3";
    link.click();
  };
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16   mt-20 h-screen lg:mt-32">
      <div className="border-2 p-4 py-10 bg-gray-100">
        <div className="flex flex-col">
          <textarea
            id="speechArea"
            rows="3"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Start writing your speech here..."
            onChange={handleWordLimit}
            value={text}
          ></textarea>
          <p
            className={`text-sm mt-2 ${
              wordCount > 1500 ? "text-red-500" : "text-gray-500"
            }`}
          >
            {wordCount}/1500 words
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 gap-4 mt-2 md:px-6">
          {/* Voice Upload Section */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700 mb-1">
              Voice Upload
            </label>
            <label
              htmlFor="audioUpload"
              className="cursor-pointer flex gap-2 bg-blue-500 text-white px-9 py-4 rounded-md hover:bg-blue-600"
            >
              <UploadIcon />
              Upload
              <input
                id="audioUpload"
                type="file"
                accept=".mp3,.wav"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            {fileName && (
              <p className="mt-4 text-sm text-gray-600">
                Selected File: <span className="font-medium">{fileName}</span>
              </p>
            )}
          </div>

          {/* Voice Speed Section */}
          <div className="flex flex-col">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { width: "100%" } }}
              noValidate
              autoComplete="off"
            >
              <label className="text-lg font-semibold text-gray-700 mb-1">
                Voice Speed
              </label>
              <TextField
                id="outlined-select-speed"
                select
                label="Playback Speed"
                value={selectedspeed}
                onChange={handlespeed}
                fullWidth
                className="mt-2"
              >
                {speedvalue.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>

          {/* Language to Convert Section */}
          <div className="flex flex-col">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
              noValidate
              autoComplete="off"
            >
              <label className="text-lg font-semibold text-gray-700 mb-1">
                Select Language
              </label>
              <TextField
                id="outlined-select-language"
                select
                label="Select Language"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                helperText="Please select your language"
                fullWidth
              >
                <MenuItem value="" disabled>
                  Select a language
                </MenuItem>
                {languages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>
        </div>
        <div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:px-6">
            <Button
              variant="contained"
              color="primary"
              onClick={handleConvertAudio}
              className="w-full sm:w-auto py-4 mb-5"
            >
              Convert Audio
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadAudio}
              className="w-full sm:w-auto py-4 mb-5"
            >
              Download Audio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratoraudioTool;

// import React, { useState, useRef } from 'react';
// import Link from 'next/link';

// const GeneratorTool = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [lengthMenuOpen, setLengthMenuOpen] = useState(false);
//     const [selectedTone, setSelectedTone] = useState("Formal");
//     const [selectedLength, setSelectedLength] = useState("Default");
//     const [activeTab, setActiveTab] = useState("Paragraph 1");
//     const [paragraphs, setParagraphs] = useState([]);
//     const [showSection, setShowSection] = useState(false);
//     const [buttonText, setButtonText] = useState("Generate Paragraphs");
//     const inputRef = useRef(null);
//     const [characterCount, setCharacterCount] = useState(0);
//     const [wordCount, setWordCount] = useState(0);
//     const [sentenceCount, setSentenceCount] = useState(0);
//     const [characterOccurrences, setCharacterOccurrences] = useState({});
//     const [wordOccurrences, setWordOccurrences] = useState({});
//     const [sentenceOccurrences, setSentenceOccurrences] = useState({});
//     const MenuOpenHandle = () => setMenuOpen((prev) => !prev);
//     const LengthMenuOpenHandle = () => setLengthMenuOpen((prev) => !prev);

//     const handleToneSelect = (tone) => {
//         setSelectedTone(tone);
//         setMenuOpen(false);
//     };

//     const handleLengthSelect = (length) => {
//         setSelectedLength(length);
//         setLengthMenuOpen(false);
//     };

//     const contentHandle = () => {
//         const newParagraphs = generateParagraphs();
//         setParagraphs(newParagraphs);
//         setShowSection(true);
//         setButtonText("Generate Again");
//         updateCounts(newParagraphs);
//         updateOccurrences(newParagraphs);
//     };

//     const updateCounts = (newParagraphs) => {
//         const text = newParagraphs.join(' ');
//         setCharacterCount(text.length);
//         setWordCount(text.split(/\s+/).filter(word => word.length > 0).length);
//         setSentenceCount(text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length);
//     };

//     const updateOccurrences = (newParagraphs) => {
//         const text = newParagraphs.join(' ');

//         // Character occurrences
//         const charOccurrences = {};
//         for (let char of text) {
//             if (char.trim()) {
//                 charOccurrences[char] = (charOccurrences[char] || 0) + 1;
//             }
//         }
//         setCharacterOccurrences(charOccurrences);

//         // Word occurrences
//         const wordOccurrences = {};
//         text.split(/\s+/).forEach(word => {
//             if (word.trim()) {
//                 wordOccurrences[word] = (wordOccurrences[word] || 0) + 1;
//             }
//         });
//         setWordOccurrences(wordOccurrences);

//         // Sentence occurrences
//         const sentenceOccurrences = {};
//         text.split(/[.!?]/).forEach(sentence => {
//             const trimmed = sentence.trim();
//             if (trimmed) {
//                 sentenceOccurrences[trimmed] = (sentenceOccurrences[trimmed] || 0) + 1;
//             }
//         });
//         setSentenceOccurrences(sentenceOccurrences);
//     };

//     const generateParagraphs = () => {
//         const paragraphCount = activeTab === "Paragraph 1" ? 1 : activeTab === "Paragraphs 2" ? 2 : 3;
//         return Array.from({ length: paragraphCount }, (_, i) => `${i + 1}. ${inputRef.current?.value || "Generated content goes here."}`);
//     };

//     const downloadDocFile = () => {
//         const element = document.createElement("a");
//         const file = new Blob([paragraphs.join('\n\n')], { type: 'application/msword' });
//         element.href = URL.createObjectURL(file);
//         element.download = "paragraphs.doc";
//         element.click();
//     };

//     const copyContent = async () => {
//         try {
//             await navigator.clipboard.writeText(paragraphs.join('\n\n'));
//             alert("Content copied to clipboard!");
//         } catch (err) {
//             console.error("Failed to copy: ", err);
//         }
//     };

//     const deleteContent = () => {
//         setShowSection(false);
//         setButtonText("Generate Paragraphs");
//         setParagraphs([]);
//         setCharacterOccurrences({});
//         setWordOccurrences({});
//         setSentenceOccurrences({});
//         inputRef.current.value = "";
//     };

//     return (
//         <div className="container-fluid p-4 sm:p-6 md:p-8 lg:p-10 mt-10">
//             <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="w-full max-w-[950px]">
//                     <h1 className="text-xl md:text-3xl font-bold">Paragraph Generator</h1>
//                     <p className="text-sm md:text-lg mt-2">
//                     AI Paragraph Generator is online AI Paragraph Writer that helps you generate informative and compelling paragraphs in seconds.
//                     </p>
//                 </div>
//             </div>

//             {/* tool section */}
//             <div className="mt-5 p-4 w-full lg:max-w-[1000px] mx-auto">
//                 <div className="p-4 bg-slate-100 rounded-lg shadow-md">
//                     <textarea
//                         ref={inputRef}
//                         className="w-full border-none outline-none bg-slate-100 md:text-lg lg:text-lg resize-none text-sm"
//                         placeholder="Enter your paragraph topic here..."
//                     ></textarea>
//                     <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-5">
//                     <div className="md:space-y-4">
//                             <div className='grid grid-cols-2 gap-2 p-1'>
//                             <div>
//                                 <p className='text-sm'>Paragraph Tone</p>
//                                 <div className="relative flex items-center mt-3">
//                                     <button
//                                         className="inline-flex items-center px-3 py-3 min-w-[128px] text-sm font-normal text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
//                                         onClick={MenuOpenHandle}
//                                         aria-expanded={menuOpen}
//                                     >
//                                         {selectedTone}
//                                         <svg className="w-2.5 h-2.5 ml-5 md:ml-16 lg:ml-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                                         </svg>
//                                     </button>
//                                     <div className={`absolute top-full left-0 w-full max-w-[200px] ${menuOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
//                                         <ul className="py-2 text-sm text-gray-700">
//                                             {["Formal", "Informal", "Professional", "Diplomatic", "Academic", "Simplified", "Persuasive"].map((tone) => (
//                                                 <li key={tone}>
//                                                     <button
//                                                         onClick={() => handleToneSelect(tone)}
//                                                         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                                                     >
//                                                         {tone}
//                                                     </button>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className='text-sm'>Paragraph Length</p>
//                                 <div className="relative flex items-center mt-3">
//                                     <button
//                                         className="inline-flex items-center px-3 py-3 min-w-[128px] text-sm font-normal text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
//                                         onClick={LengthMenuOpenHandle}
//                                         aria-expanded={lengthMenuOpen}
//                                     >
//                                         {selectedLength}
//                                         <svg className="w-2.5 h-2.5 ml-5 md:ml-16 lg:ml-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                                         </svg>
//                                     </button>
//                                     <div className={`absolute top-full left-0 w-full max-w-[200px] ${lengthMenuOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
//                                         <ul className="py-2 text-sm text-gray-700">
//                                             {["Default", "Concise", "Detailed"].map((length) => (
//                                                 <li key={length}>
//                                                     <button
//                                                         onClick={() => handleLengthSelect(length)}
//                                                         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                                                     >
//                                                         {length}
//                                                     </button>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         <div>
//                             <p className='text-sm'>Number of Paragraphs</p>
//                             <ul className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-3 bg-white p-1 gap-1 rounded-lg">
//                                 {["Paragraph 1", "Paragraphs 2", "Paragraphs 3"].map((item) => (
//                                     <li key={item} className="flex-1">
//                                         <button
//                                             onClick={() => setActiveTab(item)}
//                                             className={`p-2 w-full text-center border-2  rounded-lg ${
//                                                 activeTab === item ? 'bg-gray-600 text-white' : 'hover:bg-gray-600 hover:text-white'
//                                             }`}
//                                         >
//                                             {item}
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Generate Section */}
//             <div className='mt-5 text-center'>
//                 <button className='bg-gray-600 p-3 text-white rounded-md' onClick={contentHandle}>
//                     {buttonText}
//                 </button>
//             </div>

//             {showSection && (
//                 <div className='container mt-5 p-4 w-full lg:max-w-[980px] rounded-lg shadow-md mx-auto bg-slate-100'>
//                     <div className='flex flex-col sm:flex-row sm:justify-between items-center mb-5'>
//                         <div>
//                             <p className='text-lg font-bold'>Result</p>
//                         </div>
//                         <div className='flex-1 mt-2 sm:mt-0 text-center'>
//                             <p>Characters {characterCount} | Words {wordCount} | Sentences {sentenceCount}</p>
//                         </div>
//                         <div className='flex gap-5 mt-3'>
//                             <i className="fa-solid fa-trash text-xl cursor-pointer" onClick={deleteContent}></i>
//                             <i className="fa-solid fa-download text-xl cursor-pointer" onClick={downloadDocFile}></i>
//                             <i className="fa-solid fa-copy text-xl cursor-pointer" onClick={copyContent}></i>
//                         </div>
//                     </div>
//                     {paragraphs.map((para, idx) => (
//                         <div key={idx} className='mt-5 border-t-2 border-gray-300' >
//                             <div className='mt-5'>
//                                 <p className='text-lg font-bold'>Paragraph {idx + 1}</p>
//                                 <p className='mt-2 text-justify'>{para}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GeneratorTool;
