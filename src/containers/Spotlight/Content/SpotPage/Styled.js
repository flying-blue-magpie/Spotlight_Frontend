import styled from 'styled-components';

export const Feature = styled.div`
  position: relative;
`;

export const FeatureImage = styled.img`
  display: block;
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

export const FeatureInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-size: 16px;
`;

export const Title = styled.div`
  padding: 0 12px;
  margin-bottom: 6px;
  font-size: 15px;
`;

export const LikeButton = styled.i`
  margin-right: 3px;
`;

export const Paragraph = styled.p`
  padding: 0 12px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
