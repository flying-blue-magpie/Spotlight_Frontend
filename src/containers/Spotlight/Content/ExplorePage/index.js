import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 36px;
`;

const Card = styled.div`
  display: block;
`;

const CardImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background: lightgray;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  background: lightgray;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
`;

const ExplorePage = () => (
  <Container>
    <CardRow>
      <Card>
        <CardImage src="https://www.telegraph.co.uk/content/dam/Travel/2017/May/taipei-night-market.jpg?imwidth=450" />
        <CardInfo>
          台北101
          <i class="fas fa-heart">666</i>
        </CardInfo>
      </Card>
    </CardRow>
    <ButtonRow>
      <Button>跳過</Button>
      <Button>詳細</Button>
      <Button>想去</Button>
    </ButtonRow>
  </Container>
);

export default ExplorePage;
