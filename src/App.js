import React from 'react'
import EducationInfo from './component/EducationInfo'
import ExperienceInfo from './component/ExperienceInfo'
import PersonalInfo from './component/PersonalInfo'

function App() {
  return (
    <>
      <main>
        <PersonalInfo/>
        <EducationInfo/>
        <ExperienceInfo/>  
      </main>    
    </>
  )
}

export default App