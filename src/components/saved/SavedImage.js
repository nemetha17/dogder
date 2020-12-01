import styled from "styled-components"

const SavedImage = styled.div`
  width: 500px;
  height: 500px;
  background: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export default SavedImage