import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa'; // Importing relevant icons

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
  padding: 15px;
  margin: 15px 0;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #f7f8fc;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e6e7f2;
  }
`;

const ReviewIcon = styled(FaQuoteLeft)`
  margin-right: 10px;
  color: #4C8BF5;
`;

const ReviewText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const ReviewerName = styled.span`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Star = styled(FaStar)`
  color: gold;
  margin-right: 5px;
`;

const EmptyStar = styled(FaRegStar)`
  color: gold;
  margin-right: 5px;
`;

const ReviewsPage = () => {
  const reviews = [
    { name: 'Shubham Thaur', text: 'Hakim Ikbal is best for sexual problems', rating: 5 },
    { name: 'Shubham Kumar', text: 'Ikbal bhai ne mera grihastha jivan bacha liya', rating: 4 },
    { name: 'Sunny Kumar', text: 'Mai to pahle hi sahi tha bas nurse ko dekhne aya tha', rating: 4 },
    { name: 'Kundan Kumar', text: 'Meri samsyao ka to koi samadhan hi nahi h.', rating: 5 },
    { name: 'Abhishek Verma', text: 'Great experience during my visit.', rating: 2},
  ];

  return (
    <PageContainer>
      <h2>Reviews</h2>
      <List>
        {reviews.map(review => (
          <ListItem key={review.name}>
            <ReviewText>
              <ReviewIcon />
              "{review.text}"
            </ReviewText>
            <ReviewerName>
              - {review.name}
              {Array.from({ length: 5 }).map((_, index) => (
                index < review.rating ? <Star key={index} /> : <EmptyStar key={index} />
              ))}
            </ReviewerName>
          </ListItem>
        ))}
      </List>
    </PageContainer>
  );
}

export default ReviewsPage;
