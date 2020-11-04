import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Form from "../components/form"

const Header = () => {
  const [loading, setLoading] = useState(false)

  return (
    <StyledHeader>
      <h1>UFO Sightings</h1>

      <FormContainer>
        {
          loading && (
            <svg
              className="prefix__icon prefix__icon-tabler prefix__icon-tabler-rotate-clockwise"
              width={30}
              height={30}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#4CAF50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M4.05 11a8 8 0 11.5 4m-.5 5v-5h5" />
            </svg>
          )
        }

        <Form setLoading={setLoading} />
      </FormContainer>

    </StyledHeader>
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledHeader = styled.header`
  min-width: 100%;
  max-width: 1120px;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  h1 {
    color: #00ff91;
  }
`

const FormContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 20px;
    display: block;
    animation: ${rotate} 1.5s ease-in-out infinite;
  }
`

export default Header
