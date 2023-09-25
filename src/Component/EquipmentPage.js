import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
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
  animation: ${fadeIn} 1.5s;
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
`;

const EquipmentName = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const OrderButton = styled.button`
  display: block;
  margin: 30px auto;
  padding: 10px 25px;
  background-color: #007BFF;
  border: none;
  border-radius: 20px;
  color: #FFF;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const EquipmentPage = () => {
  const dummyData = [
    { equipmentName: 'Ventilator', required: 10, available: 6 },
    { equipmentName: 'MRI Machine', required: 4, available: 2 },
    { equipmentName: 'Ultrasound Machine', required: 7, available: 4 },
    { equipmentName: 'Thermometer', required: 10, available: 14 },
    { equipmentName: 'Injection', required: 10, available: 14 },
  ];

  return (
    <PageContainer>
      <h2>Equipment Details</h2>
      <List>
        {dummyData.map(item => (
          <ListItem key={item.equipmentName}>
            <EquipmentName>{item.equipmentName}</EquipmentName>
            <div>
              <span>Required: {item.required} </span>
              <span>Available: {item.available}</span>
            </div>
          </ListItem>
        ))}
      </List>
      <OrderButton>Order Equipment</OrderButton>
    </PageContainer>
  );
}

export default EquipmentPage;
