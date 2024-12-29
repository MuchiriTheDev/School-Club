import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Delete = ({ setPage}) => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationText, setConfirmationText] = useState("");
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate()

  const handleNextStep = () => {
    if (step === 2 && password.length < 6) {
      setError("Please enter valid password to confirm.");
    } else if (step === 3 && username === "") {
      setError("Please enter your username to confirm.");
    } else if (step === 4 && confirmationText !== "DELETE") {
      setError('Please type "DELETE" exactly as shown.');
    } else {
      setError("");
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handleBackStep = () => {
    setStep((prevStep) => {
        if(prevStep === 1){
            setPage('profile')
        }
        else {
            return prevStep -1
        }
    })
  }

  const handleDeleteAccount = () => {
    // Placeholder for deletion logic
    console.log("Account deleted with reason:", reason, "and feedback:", feedback);
    alert("Your account has been successfully deleted.");
  };

  return (
    <div className="p-8 max-w-lg bg-white rounded-lg shadow-lg h-3/4 mx-auto mt-10">
      {step === 1 && (
        <div className="text-start">
            <IoMdArrowRoundBack onClick={handleBackStep} size={35} className="mb-10 text-start"/>
          <h2 className="text-3xl font-bold mb-4 text-red-600">Delete Account</h2>
          <p className="text-gray-700 mb-6">
            Deleting your account is permanent and cannot be undone. You will lose all data associated with your account, including personal settings, saved items, and any activity.
          </p>
          <button
            onClick={handleNextStep}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="text-start">
             <IoMdArrowRoundBack onClick={handleBackStep} size={35} className="mb-10 text-start"/>
          <h2 className="text-xl font-semibold mb-4">Confirm Your Password</h2>
          <p className="text-gray-600 mb-2">
            Please enter your password to confirm that you want to delete your account.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter your password"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            onClick={handleNextStep}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Confirm
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="text-start">
             <IoMdArrowRoundBack onClick={handleBackStep} size={35} className="mb-10 text-start"/>
          <h2 className="text-xl font-semibold mb-4">Verify Your Username</h2>
          <p className="text-gray-600 mb-2">
            Please enter your username to confirm it’s your account being deleted.
          </p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter your username"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            onClick={handleNextStep}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Next
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="text-start">
            <IoMdArrowRoundBack onClick={handleBackStep} size={35} className="mb-10 text-start"/>
          <h2 className="text-xl font-bold text-red-600 mb-4">Final Confirmation</h2>
          <p className="text-gray-700 mb-2">
            Please type <span className="font-bold">"DELETE"</span> to confirm. This action cannot be undone.
          </p>
          <input
            type="text"
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            placeholder="Type DELETE to confirm"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            onClick={handleNextStep}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Confirm
          </button>
        </div>
      )}

      {step === 5 && (
        <div className="text-start">
             <IoMdArrowRoundBack onClick={handleBackStep} size={35} className="mb-10 text-start"/>
          <h2 className="text-xl font-semibold mb-4">We're Sorry to See You Go!</h2>
          <p className="text-gray-700 mb-4">
            Please tell us why you’re leaving:
          </p>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
          >
            <option value="">Select a reason</option>
            <option value="privacy">Privacy concerns</option>
            <option value="unhappy">Dissatisfied with the service</option>
            <option value="too_expensive">Too expensive</option>
            <option value="other">Other</option>
          </select>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            placeholder="Additional feedback (optional)"
          />
          <div className="w-full h-fit flex justify-between items-center">
            <button
                onClick={handleDeleteAccount}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            >
                Yes, Delete My Account
            </button>
            <button
                onClick={() => setStep(1)}
                className="ml-4 text-lightGreen font-semibold underline hover:text-gray-800 transition duration-200"
            >
                Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
