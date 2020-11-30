import styled from "styled-components/macro"

const NextButton = styled.button`
  color: #000;
  border-radius: 10px;
  background: blue;
  color: white;
  padding: 10px;
  border: 0px;
  margin: 5px;
  cursor: pointer;
  text-transform: capitalize;

  :hover {
    background: rgba(0,0,255, 0.5);
  }
`

export default NextButton