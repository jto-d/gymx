import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  background-color: var(--highlight-color);
  height: 92vh;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  
`

const StyledForm = styled.form`
  height: 60vh;

  background-color: var(--secondary-bg-color);
  width: 35%;
  border-radius: 40px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    margin-top: 7px;
    width: 80%;
    text-align: right;

    a {
      color: var(--highlight-color);
    }
  }
  
`

const StyledEntry = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;

  margin-top: 20px;

  label {
    font-weight: 600;
  }

  input {
    margin-top: 3px;
    width: 100%;
    height: 30px;
    font-size: 15px;
    border: none;
    border: solid 1px #5555;
    border-radius: 5px;

    padding: 7px;

  }

`

const StyledButton = styled.button`
  margin-top: 20px;
  width: 80%;
  padding: 10px 0;

  border: none;
  background-color: var(--highlight-color);
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;

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


const Tracker = () => {
  const [workout, setWorkout] = useState('')
  const [weight, setWeight] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')

  async function trackWorkout(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/tracker', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
        workout,
        weight,
        sets,
        reps
			}),
		})

		const data = await response.json()
    console.log(data)

	}

  return (
    <Container>
      <StyledForm onSubmit={trackWorkout}>
        <h3>Enter Workout</h3>

        <StyledEntry>
          <label>Workout Name</label>
          <input
            type="text"
            placeholder="Enter Workout Name"
            onChange={(e) => setWorkout(e.target.value)}
          />
        </StyledEntry>

        <StyledEntry>
          <label>Weight</label>
          <input
            type="text"
            placeholder="Enter Weight"
            onChange={(e) => setWeight(e.target.value)}
          />
        </StyledEntry>

        <StyledEntry>
          <label>Sets</label>
          <input
            type="text"
            placeholder="Enter Sets"
            onChange={(e) => setSets(e.target.value)}
          />
        </StyledEntry>

        <StyledEntry>
          <label>Reps</label>
          <input
            type="text"
            placeholder="Enter Reps"
            onChange={(e) => setReps(e.target.value)}
          />
        </StyledEntry>
        
        <StyledButton type="submit" >
          Enter
        </StyledButton>

        <p>
          <a href="/stats">Click Here to View Stats</a>
        </p>
      </StyledForm>
    </Container>
  )
}

export default Tracker