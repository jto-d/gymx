import React, { useState }from 'react'
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


const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
        lastName,
				email,
				password,
			}),
		})

		const data = await response.json()
    console.log(data)

	}



  return (
    <Container>
      <StyledForm onSubmit={registerUser}>
        <h3>Sign Up</h3>

        <StyledEntry>
          <label>First Name</label>
          <input
            value={firstName}
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </StyledEntry>

        <StyledEntry>
          <label>Last Name</label>
          <input 
            value={lastName}
            type="text" 
            placeholder="Last Name" 
            onChange={(e) => setLastName(e.target.value)}
          />
        </StyledEntry>

        <StyledEntry>
          <label>Email Address</label>
          <input
            value={email}
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledEntry>

        <StyledEntry>
          <label>Password</label>
          <input
            value={password}
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledEntry>

        
        <StyledButton type="submit" >
          Sign Up
        </StyledButton>

        <p>
          Already registered? <a href="/login">Login</a>
        </p>
      </StyledForm>
    </Container>
  )
}

export default Register