// StyledComponents.js
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
    max-width: 600px;
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    animation: ${fadeIn} 1.5s;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
`;

const Status = styled.span`
    color: ${props => props.available ? 'green' : 'red'};
`;

const OrderButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    color: #FFF;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

export { PageContainer, List, ListItem, Status, OrderButton };
