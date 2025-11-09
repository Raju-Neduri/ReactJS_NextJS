import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Work for Happy Life and Money🤑",
];

const App = () => {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((prev) => prev - 1);
  }
  function handleNext() {
    if (step < 3) setStep((prev) => prev + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        {[1, 2, 3].map((num) => (
          <div key={num} className={step >= num ? "active" : ""}>
            {num}
          </div>
        ))}
      </div>

      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          disabled={step === 1}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          disabled={step === 3}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div
        className="message"
        style={{ paddding: "20px", margin: "20px", textAlign: "center" }}
      >
        <div
          className="message"
          style={{
            padding: "10px",
            margin: "10px",
            textAlign: "center",
            color: "#ef0c0cff",
          }}
        >
          {step === 3 && <span>Please click on Previous button</span>}
          {step === 1 && <span>Please click on Next button</span>}
        </div>
      </div>
    </div>
  );
};

export default App;
