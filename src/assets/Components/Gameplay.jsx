import Numberselect from "./Numberselect";
import Roledice from "./Roledice";
import Totalscore from "./Totalscore";
import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";
import { Button, OutlineButton } from "./Button"; // Ensure both are imported

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null); // Start with null
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false); // Added state for showing rules

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null); // Reset selected number to null
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(null); // Reset selected number
    setCurrentDice(1); // Optionally reset dice to 1
    setError(""); // Clear any error
  };

  return (
    <MainContainer>
      <div className="top_section">
        <Totalscore score={score} />
        <Numberselect
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Roledice
        currentDice={currentDice}
        rollDice={rollDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
       {showRules &&      <Rules />}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Keep this unique */
  }
`;
