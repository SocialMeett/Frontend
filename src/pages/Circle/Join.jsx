import React from 'react';
import { Link } from 'react-router-dom';

const JoinCircle = () => {
    const handleKeyUp = (e, nextInputId) => {
        // Move focus to the next input when a digit is entered
        if (e.key >= 0 && e.key <= 9) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    return (
      <div className='bg-gray-100 h-screen justify-center flex items-center  '>
      <div className='flex flex-col justify-center '>
        <p className='flex '>Invited to join a circle, enter your code</p>
         </div>
        <div className=" ">
            <div className="bg-white p-6 rounded-lg shadow-md w-96 ">
                <h1 className="text-xl font-semibold text-center mb-4">Enter Code</h1>
                <form className="space-y-4 ">
                    <div className="flex justify-between space-x-2">
                        {/* Code Input Boxes */}
                        {Array.from({ length: 6 }).map((_, index) => {
                            const inputId = `code-${index}`;
                            const nextInputId = `code-${index + 1}`;
                            return (
                                <input
                                    key={inputId}
                                    id={inputId}
                                    type="number"
                                    maxLength="1" // Allow only 1 digit
                                    className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onKeyUp={(e) => handleKeyUp(e, nextInputId)}
                                    placeholder=""
                                />
                            );
                        })}
                    </div>
                    <Link
                        to="/someOtherPage" // Redirect to another page after code is entered
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                    >
                        Submit
                    </Link>
                </form>
            </div>
            </div>
        </div>
    );
};

export default JoinCircle;
