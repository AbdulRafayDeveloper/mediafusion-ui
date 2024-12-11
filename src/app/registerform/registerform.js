import React from 'react'

const registerform = () => {
  return (
    <div>
      register 
    </div>
  )
}

export default registerform




// "use client";
// import { useState } from "react";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required.";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters long.";
//     }
//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password.";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log("Form Data Submitted: ", formData);
//       // Replace this console log with your API integration
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
//         <form onSubmit={handleSubmit} className="mt-6">
//           {/* Name Field */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-medium">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter your name"
//             />
//             {errors.name && (
//               <p className="text-sm text-red-500 mt-1">{errors.name}</p>
//             )}
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-sm text-red-500 mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-sm text-red-500 mt-1">{errors.password}</p>
//             )}
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-gray-700 font-medium"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
//                 errors.confirmPassword ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Confirm your password"
//             />
//             {errors.confirmPassword && (
//               <p className="text-sm text-red-500 mt-1">
//                 {errors.confirmPassword}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
