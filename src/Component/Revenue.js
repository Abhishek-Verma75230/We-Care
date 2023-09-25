import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MdAttachMoney, MdPeople, MdWork, MdBarChart } from 'react-icons/md'; // Importing relevant icons

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

const RevenueIcon = (type) => {
  switch(type) {
    case 'Revenue from Customers':
      return <MdAttachMoney size={22} color="#4C8BF5" style={{ marginRight: "10px" }} />;
    case 'Staff Salary':
      return <MdPeople size={22} color="#4C8BF5" style={{ marginRight: "10px" }} />;
    case 'Other Expenses':
      return <MdWork size={22} color="#4C8BF5" style={{ marginRight: "10px" }} />;
    case 'Net Profit':
      return <MdBarChart size={22} color="#4C8BF5" style={{ marginRight: "10px" }} />;
    default:
      return null;
  }
}

const RevenueType = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const RevenuePage = () => {
  const revenueData = [
    { type: 'Revenue from Customers', amount: '250,000' },
    { type: 'Staff Salary', amount: '150,000' },
    { type: 'Other Expenses', amount: '30,000' },
    { type: 'Net Profit', amount: '70,000' },
  ];

  return (
    <PageContainer>
      <h2>Revenue Details</h2>
      <List>
        {revenueData.map(item => (
          <ListItem key={item.type}>
            <RevenueType>
              {RevenueIcon(item.type)}
              {item.type}
            </RevenueType>
            <span>{item.amount}</span>
          </ListItem>
        ))}
      </List>
    </PageContainer>
  );
}

export default RevenuePage;
