import React from 'react';
import styled from 'styled-components';
import { articles } from './mockData';
import Card from './Card';

const Container = styled.div`
  padding: 14px 15px;
`;

const ArticlesPage = () => (
  <Container>
    {
      articles.map((article) => (
        <Card
          key={article.id}
          title={article.title}
          content={article.content}
          timestamp={article.timestamp}
          images={article.images}
        />
      ))
    }
  </Container>
);

export default ArticlesPage;
