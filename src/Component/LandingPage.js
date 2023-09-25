import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaHospital, FaUserInjured, FaAmbulance } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #16a085, #1f85c4);
  animation: ${fadeIn} 1.2s ease;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 40px;
  color: #f4f4f6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const OptionLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ gradient }) => gradient || 'transparent'};
  margin-bottom: 10px;
`;

const LandingPage = () => {
  return (
    <Container>
      <Heading>Welcome to Hospital Management System</Heading>
      <OptionsContainer>
        <OptionLink to="/doctor-login">
          <IconContainer gradient="linear-gradient(315deg, #0077b6, #003853)">
            <FaHospital size={40} />
          </IconContainer>
          Hospital
        </OptionLink>
        <OptionLink to="/patient-login">
          <IconContainer gradient="linear-gradient(315deg, #0096c7, #00557b)">
            <FaUserInjured size={40} />
          </IconContainer>
          Patient
        </OptionLink>
        <OptionLink to="/Community-Page">
          <IconContainer gradient="linear-gradient(315deg, #0096c7, #00557b)">
            <FaUserInjured size={40} />
          </IconContainer>
          Community Page
        </OptionLink>
        <OptionLink to="/emergency">
          <IconContainer gradient="linear-gradient(315deg, #48cae4, #007aa3)">
            <FaAmbulance size={40} />
          </IconContainer>
          Emergency
        </OptionLink>
      </OptionsContainer>
    </Container>
  );
}

export default LandingPage;
