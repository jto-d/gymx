import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'


const Container = styled.div`
  background-color: var(--highlight-color);
  height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const StyledForm = styled.form`
  height: 15vh;
  margin-top: 20px;




  background-color: var(--secondary-bg-color);
  width: 50%;
  border-radius: 40px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 25px;
    margin-bottom: 10px;
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

  margin-top: 10px;

  label {
    font-weight: 600;
  }

  input {
    margin-top: 3px;
    width: 450px;
    height: 30px;
    font-size: 15px;
    border: none;
    border: solid 1px #5555;
    border-radius: 5px;

    padding: 7px;

  }

`

const StyledButton = styled.button`
  position: absolute;
  margin-top: 3px;
  margin-left: 10px;
  width: 10%;
  padding: 7px 0;
  align-items: center;

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


const Stats = () => {
  const [workout, setWorkout] = useState('')
  const [data, setData] = useState([])

  async function viewWorkout(event) {
    console.log("yes")
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/stats', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                workout
			}),
		})

		const data = await response.json()
        setData(data.workouts)
        

	}

  return (
    <Container>
      <StyledForm onSubmit={viewWorkout}>
        <h3>Enter Workout</h3>
        <StyledEntry>
            <label>Workout Name</label>
            <div flexdirection="row"  >
                <input
                    type="text"
                    placeholder="Enter Workout Name"
                    onChange={(e) => setWorkout(e.target.value)}
                />
                <StyledButton type="submit">
                    Enter
                </StyledButton>
            </div>
        </StyledEntry>
      </StyledForm>
        <table style={{margin: '30px', width: '60%', textAlign: 'center'}}>
            <tbody>
                <tr>
                    <th>Weight</th>
                    <th>Reps</th>
                    <th>Sets</th>
                </tr>
                {data.map((item, index) => (
                    <tr key = {index}>
                        <td style={{ padding: '10px', border: '1px solid black' }}>{item.weight}</td>
                        <td style={{ padding: '10px', border: '1px solid black' }}>{item.reps}</td>
                        <td style={{ padding: '10px', border: '1px solid black' }}>{item.sets}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Container>
  )
}

export default Stats