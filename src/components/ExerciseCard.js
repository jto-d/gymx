import React from 'react';
import { Link } from 'react-router-dom';
import {Stack, Typography } from '@mui/material';
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  margin-left: 20px;
  padding: 1rem 1.5rem;

  border: none;
  background-color: var(--highlight-color);
  font-size: 14px;
  border-radius: 20px;
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


const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}` } style={{textDecoration: 'none'}} >
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <StyledButton>
        {exercise.bodyPart}
      </StyledButton>
      <StyledButton>
        {exercise.target}
      </StyledButton>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize" textDecoration='none'>
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;