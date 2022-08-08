import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    height: 15vh;
    background-color: var(--secondary-bg-color);

    color: var(--primary-color);

    span {

        margin-top: 20px;
        font-size: .8rem;
    }

`

const StyledLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row;

    list-style: none;

    li {
      margin: 0 1.2rem;
      cursor: pointer;
      flex-direction: column;
      a {
          color: var(--primary-color);
          text-decoration: none;
          flex-direction: column;
          text-transform: uppercase;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          &:hover {
              color: var(--highlight-color);
          }
      }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
        <StyledLinks>
            <li key='link-home'>
                <a href={'/'}>home</a>
            </li>
            {['exercises', 'tracker', 'register', 'login', 'contact'].map((item) => (
                <li key={`link-${item}`}>
                <a href={`/${item}`}>{item}</a>
                </li>
            ))}
        </StyledLinks>
        <span>Copyright © 2022 Jack O'Donnell</span>
    </StyledFooter>
  )
}

export default Footer