import React from "react"
import { css } from "styled-components/macro"

import Button from "./Button"
import Container from "./components/dogder/Container"
import Image from "./components/dogder/Image"
import {useSaved} from "./hooks/useSaved"
import useLocalStorage from "./hooks/useLocalStorage"
import {initialState ,reducer} from "./reducers/savedReducer"


const Dogder = ({images,next}) => {

  const {saved, add, unsave} = useSaved();
  const {values,setValue, deleteValue, clearLocalStorage} = useLocalStorage ("saved",initialState)


    return(
    <div
    css={css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    `}>
   <Image url={images.message} />
    <Container>
    {saved.includes(images) ? (
          <Button
            color={values.includes(images) ? "red" : "green"}
            onClick={() => unsave(images)}
          >
            Unsave
          </Button>
        ) : (
          <Button
            onClick={() => add(images)}
            color={values.includes(images) ? "red" : "green"}
          >
            Save
          </Button>
        )}
    <Button color="blue" onClick={next}>Next</Button>
    </Container>
    </div>
    )
}

export default Dogder