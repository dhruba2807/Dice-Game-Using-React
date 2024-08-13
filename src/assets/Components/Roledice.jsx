import styled from "styled-components";

const Roledice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/Dice/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default Roledice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
