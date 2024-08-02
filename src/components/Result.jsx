import React from 'react'

const Result = ({ open, children, title, contentText, handleContinue }) => {
  if(!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
        <div className="text-xl font-bold mb-4">{title}</div>
        <div className="mb-4">
          <p className="text-gray-700">{contentText}</p>
          {children}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result