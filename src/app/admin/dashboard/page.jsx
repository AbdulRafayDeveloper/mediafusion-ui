"use client";
import React, { useState, useEffect } from "react";
import LinkingWithSidebar from "../components/LinkingWithSidebar";
import Header from "../components/Header";

function Page() {
  const [data, setData] = useState([]);
  const endpoint = "users";

  return (
    <div className="flex h-screen">
      <LinkingWithSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="flex-1 bg-gray-100 mt-12 lg:ml-64 ml-20">
          {/* <div className="bg-white mt-3 rounded-lg shadow-lg mr-2 mb-2">
                        <div className="p-4">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 px-4 sm:px-0">
                                <h2 className="text-2xl font-medium text-black mb-2 sm:mb-0">List of Customers</h2>
                                <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                                    <input
                                        type="text"
                                        placeholder="Search Email"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        className="bg-white px-3 py-1 w-full sm:w-52 border border-black text-gray-700 mb-2 sm:mb-0 sm:mr-2"
                                    />
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <button
                                            onClick={handleFilter}
                                            className="bg-red-600 text-white px-3 py-1 hover:bg-red-800 flex-1"
                                        >
                                            Search
                                        </button>
                                        <button
                                            onClick={handleClear}
                                            className="bg-red-600 text-white px-3 py-1 hover:bg-red-800 flex-1"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white rounded-sm shadow-lg overflow-hidden">
                                    <thead className="font-bold">
                                        <tr>
                                            <th className="p-2 border border-gray-300" style={{ width: "4%" }}>Sr#</th>
                                            <th className="p-2 border border-gray-300" style={{ width: "15%" }}>Email</th>
                                            <th className="p-2 border border-gray-300" style={{ width: "20%" }}>Subject</th>
                                            <th className="p-2 border border-gray-300" style={{ width: "37%" }}>Message</th>
                                            <th className="p-2 border border-gray-300" style={{ width: "20%" }}>Date</th>
                                            <th className="p-2 border border-gray-300" style={{ width: "4%" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((element, index) => (
                                                <tr className="hover:bg-gray-100" key={element._id}>
                                                    <td className="text-center border border-gray-300 text-gray-900 p-1">{index + 1}</td>
                                                    <td className="text-center border border-gray-300 text-gray-900 p-1">{element.email}</td>
                                                    <td className="text-center border border-gray-300 text-gray-900 p-1">{element.subject}</td>
                                                    <td className="text-center border border-gray-300 text-gray-900 p-1">{element.message}</td>
                                                    <td className="text-center border border-gray-300 text-gray-900 p-1">
                                                        {new Date(element.createdAt).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </td>
                                                    <td className="text-center border border-gray-300 p-1">
                                                        <div className='flex flex-row space-x-3 justify-center'>
                                                            <button className="text-red-600 hover:text-red-800">
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center border border-gray-300 text-gray-900 p-1">
                                                    No records found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <PaginationComponent count={totalPages} page={currentPage} />
                        </div>
                    </div> */}
          <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Card 1</h2>
                <p className="text-gray-700">
                  This is the first card. Add your content here.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Card 2</h2>
                <p className="text-gray-700">
                  This is the second card. Add some text or data here.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Card 3</h2>
                <p className="text-gray-700">
                  This is the third card. Display your information here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
