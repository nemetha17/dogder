import styled from "styled-components/macro"

const Button = styled.button`
  color: #000;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : "green")};
  color: white;
  padding: 10px;
  border: 0px;
  margin: 5px;
  cursor: pointer;
  text-transform: capitalize;

  :hover {
    background: rgba(0,255,0);
  }
`

export default Button