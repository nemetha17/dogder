import React from "react"
import { css } from "styled-components/macro"

import Button from "./Button"
import Container from "./components/dogder/Container"
import Image from "./components/dogder/Image"


const Dogder = ({images,save,saved,next,remove }) => {
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
            color={saved.includes(images) ? "red" : "green"}
            onClick={() => remove(images)}
          >
            Unsave
          </Button>
        ) : (
          <Button
            onClick={() => save(images)}
            color={saved.includes(images) ? "red" : "green"}
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