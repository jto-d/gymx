import React from 'react'
import styled, { css }  from 'styled-components'
import curve1 from '../assets/curves/curve1.svg'
import curve2 from '../assets/curves/curve2.svg'
import curve3 from '../assets/curves/curve3.svg'

const StyledMain = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: flex-start;
  min-height: 95vh;
  padding: 0;

  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${curve1});

`

const StyledText = styled.div`
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

  a+a{
    margin-left: 20px;
  }

`

const StyledButton = styled.button`
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
    background-color: var(--dark-highlight-color);
  }

  ${props => props.invert && css`
    background-color: var(--primary-color);
    color: var(--bg-color);

    &:hover {
      background-color: var(--secondary-color);
    }

  `}

`


const StyledFeatures = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15%;
  padding-top: 5%;
  height: 40vh;
  width: 100%;
  background-color: var(--highlight-color);
  color: var(--primary-color);
  text-align: right;


  p, h1 {
    width: 44%;

  }

  p {
    font-size: 1.7rem;
    line-height: 2rem;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: -15px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  

`

const StyledDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75vh;


  aspect-ratio: 900/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: contain;
  background-size: cover;
  background-image: url(${curve2});

  text-align: center;

  h1{
    color: var(--primary-color);
    font-weight: 600;
    font-size: 3rem;
    width: 100%;
    margin-top: 10%;
  }

  p {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 15px;
  }

`

const Main = () => {
  return (
    <><StyledMain>
      <StyledText>
        <h1>Introducing GymX</h1>
        <h2>A new way to track workouts.</h2>
        <p>Ever wish you had an easy way to keep track of your progress while going to the gym? Want
          learn exercises to target different muscle groups or get the most bang for your buck with 
          cardio? GymX is for you!
        </p>
        <StyledButtons>
            <StyledButton as="a" href="/register">Register</StyledButton>
            <StyledButton as="a" href="/login">Login</StyledButton>
        </StyledButtons>
      </StyledText>
    </StyledMain>
    <StyledFeatures>
        <h1>Features</h1>
        <p>GymX is loaded with features. We have an exercise library to find lifts to target certain muscle groups
          in addition to our workout calendar and tracker. Customize your workout plan and visualize progress in a new,
          modern, and exciting way.
        </p>
        <StyledButtons>
          <StyledButton invert as="a" href="/exercises">Browse Exercises</StyledButton>
          <StyledButton invert as="a" href="/tracker">View Tracker</StyledButton>
        </StyledButtons>
    </StyledFeatures>

    <StyledDescription>
      <h1>Want to give us a try?</h1>
      <p>Simply register and give us a go... It's completely free!</p>
      <StyledButton as="a" href="/register">Get Started</StyledButton>
    </StyledDescription></>
  )
}

export default Main