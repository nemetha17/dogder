import styled from "styled-components/macro"

const UnSaveButton = styled.button`
  color: #000;
  border-radius: 10px;
  background: red;
  color: white;
  padding: 10px;
  border: 0px;
  margin: 5px;
  cursor: pointer;
  text-transform: capitalize;

  :hover {
    background: rgba(255,0,0, 0.5);
  }
`

export default UnSaveButton