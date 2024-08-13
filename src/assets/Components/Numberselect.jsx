import styled from "styled-components";

const Numberselect = ({ setError, selectedNumber, setSelectedNumber, error }) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  const numberselectorhandler = (value) => {
    setSelectedNumber(value);
    setError(""); // Clear error when a number is selected
  };

  return (
    <NumberSelectorContainer>
      {error && <p className="error">{error}</p>}
      <div className="flex">
        {arrnumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberselectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default Numberselect;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
