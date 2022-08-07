import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

`

const StyledMainText = styled.div`
  margin: 0 0 10rem 15%;
  
  h1 {
    color: var(--highlight-color);
    font-style: italic;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: .1em;
  }

  h2 {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 5rem;
    width: 100%;
    margin-top: 10px;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    color: var(--secondary-color);
    margin-top: 20px;
    width: 80%;
    line-height: 2rem;
  }
`

const StyledButtons = styled.div`
  margin: 50px 0;
  
  display: flex;


  flex-direction: row;

`

const StyledButton = styled.div`

  margin-right: 20px;

  a {
    padding: 1rem 1.5rem;
  
    background-color: var(--highlight-color);
    box-shadow: 1px 1px 3px var(--dark-shadow);
    /* border: 1px solid var(--highlight-color); */
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: .1em;
    border-radius: 5px;
    cursor: pointer;

    color: var(--bg-color);
    text-decoration: none;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--secondary-bg-color);
      
    }
  }

`

const StyledFeatures = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 60vh;
  width: 100%;
  background-color: var(--highlight-color);
  color: var(--primary-color);

  p, h1 {
    margin: 20px 15% 0 0;
    text-align: right;
    width: 44%;

  }

  p {
    font-size: 1.7rem;
    line-height: 2rem;
    font-weight: 400;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  

`

const Main = () => {
  return (
    <><StyledMain>
      <StyledMainText>
        <h1>Introducing GymX</h1>
        <h2>A new way to track workouts.</h2>
        <p>I'm a college student and software engineer based out of New Jersey. I create
          applications using code: websites, neural networks, and everything
          in between.
        </p>
        <StyledButtons>
          <StyledButton>
            <a href="#about">Register</a>
          </StyledButton>
          <StyledButton>
            <a href="#about">Login</a>
          </StyledButton>
        </StyledButtons>
      </StyledMainText>
    </StyledMain>
    <StyledFeatures>
        <h1>Features</h1>
        <p>GymX is loaded with features. We have an exercise library to find lifts to target certain muscle groups
          in addition to our workout calendar and tracker. Customize your workout plan and visualize progress in a new,
          modern, and exciting way.
        </p>
    </StyledFeatures></>
  )
}

export default Main