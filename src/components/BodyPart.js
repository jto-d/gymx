import React from 'react';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Text = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: var(--highlight-color);
    text-transform: capitalize;
`

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #52b0f7', background: '#F5F8FA', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#ffff', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 800, left: 100, behavior: 'smooth' });
    }}
  >
    <FitnessCenterIcon style = {{color: '#52b0f7'}}/>
    <Text>{item}</Text>
  </Stack>
);

export default BodyPart;