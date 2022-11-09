import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import { Box } from '@mui/material'


const StyledMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 60vh;
  padding: 0;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--highlight-color);
  height: 15vh;
  width: 100%;

  color: var(--bg-color);
  font-weight: 600;
  font-size: 2.5rem;

`
const SearchDiv = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

`

const SearchField = styled.input`
  height: 2.5rem;
  width: 40%;
  text-indent: 15px;
  font-weight: 600;

  border: none;
  border-radius: 4px;

  background-color: var(--secondary-bg-color);

`

const SearchButton = styled.button`
  background-color: var(--highlight-color);
  color: var(--bg-color);
  text-transform: none;
  width: 8%;
  font-size: .9rem;
  height: 2.5rem;
  border: none;
  border-radius: 4px;
  
`

const ExerciseSearch = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
        exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData();
    

  }, [])
  
  
  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      
      console.log(exerciseData)
      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises)
    
    }
  }

  return (
    <StyledMain>
      <StyledHeader>
        EXERCISES
      </StyledHeader>
      <SearchDiv>
        <SearchField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <SearchButton onClick={handleSearch} >Search</SearchButton>  
        
      </SearchDiv>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </StyledMain>

    
  )
}

export default ExerciseSearch