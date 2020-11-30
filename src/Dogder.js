import React from "react"
import { css } from "styled-components/macro"

import SaveButton from "./SaveButton"
import NextButton from "./NextButton"
import UnSaveButton from "./UnSaveButton"
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
          <UnSaveButton
            onClick={() => unsave(images)}
          >
            Unsave
          </UnSaveButton>
        ) : (
          <SaveButton
            onClick={() => add(images)}
          >
            Save
          </SaveButton>
        )}
    <NextButton color="blue" onClick={next}>Next</NextButton>
    </Container>
    </div>
    )
}

export default Dogder