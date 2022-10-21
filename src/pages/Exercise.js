import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { exerciseOptions, fetchData } from '../utils/fetchData'


const StyledMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 95vh;
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

const BodyParts = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 10vw;
  
`

const BodyCard = styled.div`
  margin-top: 10px;
  width: 30vw;
  background-color: var(--highlight-color);
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Exercise = () => {
  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
        exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

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
        || exercise.name.toLowerCase().includes(search)
        || exercise.name.toLowerCase().includes(search)
        || exercise.name.toLowerCase().includes(search)
      )

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


      <BodyParts>
        <BodyCard>Hi</BodyCard>
        <BodyCard>Test</BodyCard>
        <BodyCard>Hi</BodyCard>
        <BodyCard>Test</BodyCard>
        <BodyCard>Hi</BodyCard>
        <BodyCard>Test</BodyCard>
        <BodyCard>Hi</BodyCard>
        <BodyCard>Test</BodyCard>
        <BodyCard>Hi</BodyCard>
        <BodyCard>Test</BodyCard>
      </BodyParts>
        
      
    </StyledMain>
  )
}

export default Exercise