import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MdLocalHospital } from 'react-icons/md'; // Importing an icon

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  padding: 20px;
  max-width: 700px;
  margin: 50px auto;
  background-color: #FFF;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  animation: ${fadeIn} 1s ease;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #f7f8fc;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e6e7f2;
  }
`;

const ProgramIcon = styled(MdLocalHospital)`
  color: #4C8BF5;
  margin-right: 10px;
  font-size: 22px;
`;

const ProgramName = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const TrainingProgramPage = () => {
  const trainingPrograms = [
    { programName: 'Nursing Certification', duration: '6 months' },
    { programName: 'Cardiology Specialist Training', duration: '1 year' },
    { programName: 'Surgical Techniques 101', duration: '3 months' },
    { programName: 'Pediatric Care Procedures', duration: '8 months' },
    { programName: 'Advanced Anesthesiology', duration: '1 year' },
  ];

  return (
    <PageContainer>
      <h2>Training Programs</h2>
      <List>
        {trainingPrograms.map(program => (
          <ListItem key={program.programName}>
            <ProgramName><ProgramIcon />{program.programName}</ProgramName>
            <div>
              <span>Duration: {program.duration}</span>
            </div>
          </ListItem>
        ))}
      </List>
    </PageContainer>
  );
}

export default TrainingProgramPage;
