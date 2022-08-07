import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

const StyledNav = styled.nav`
  font-family: var(--font-lato);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem 2rem;
  letter-spacing: .1em;

`

const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
      margin-left: 1rem;
      color: var(--highlight-color);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: .2em;
  }
`
const StyledLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
      margin: 0 1.2rem;
      cursor: pointer;
      flex-direction: column;
      a {
          color: var(--secondary-color);
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

  @media screen and (max-width: 750px) {
      display: none;
  }
`
const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--highlight-color);

  svg {
      width: 30px;
      height: 30px;
  }

  div {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 5;

      padding: 1rem;
      width: 60%;
      height: 100vh;
      background-color: var(--secondary-bg-color);
      box-shadow: 0 10px 30px -10px var(--dark-shadow);

      display: flex;
      justify-content: flex-end;

      align-items: flex-end;
      flex-direction: column;

      svg {
          width: 30px;
          height: 30px;
          color: var(--highlight-color);
          background-color: var(--secondary-bg-color);
          margin: 1rem;
      }

      ul {
          list-style: none;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          background-color: var(--secondary-bg-color);

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }

      li {
          margin: 2rem;

          a {
              color: var(--primary-color);
              background-color: var(--secondary-bg-color);
              text-decoration: none;
              font-size: 1rem;
              text-transform: uppercase;
              font-weight: 500;

              transition: all 0.3s ease-in-out;



              &:hover {
                  color: var(--highlight-color);
              }
          }
      }

      @media screen and (min-width: 750px) {
          display: none;
      }

  }

  @media screen and (min-width: 750px) {
      display: none;
  }

`

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    
    <StyledNav>
      <StyledLogo>
        <span>Exercise Tracker</span>
      </StyledLogo>
      <StyledLinks>
        {['home', 'exercises', 'tracker', 'login'].map((item) => (
            <li key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
      </StyledLinks>
      <StyledMenu>
      <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {toggle && (
          <motion.div
            whileInView={{ x: [300,0] }}
            transition={{ duration: 0.35, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)}/>
            <ul>
              {['home', 'evercises', 'tracker', 'login'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

      </StyledMenu>
    </StyledNav>
  )
}

export default Navbar