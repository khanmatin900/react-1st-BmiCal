import React, { useState } from "react";

// Initializations
const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  // Logic
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      let bmiMessage = "";
      if (bmiValue < 18.5) {
        bmiMessage = "Underweight";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiMessage = "Normal weight";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiMessage = "Overweight";
      } else {
        bmiMessage = "Obesity";
      }
      setMessage(bmiMessage);
    } else {
      alert("Please enter valid weight and height");
    }
  };
  // Realod
  let reload = () => window.location.reload();

  return (
    <>
      <div className="container">
        <div className="grid grid-flow-row auto-rows-max main">
          <div>
            <h2 className="font-sans">BMI Calculator</h2>
          </div>

          <div className="weight-1">
            <p>Weight (kg)</p>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </div>
          <div className="height-1">
            <p>Height (cm)</p>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 rounded  submit-btn"
              onClick={calculateBMI}
            >
              Submit
            </button>
          </div>
          <div>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800  border border-gray-400 rounded shadow reload-btn"
              onClick={reload}
            >
              Reload
            </button>
          </div>

          <div>
            <p className="bmi-cal">Your BMI is:{bmi}</p>
            <p className="final-msg">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BmiCalculator;
