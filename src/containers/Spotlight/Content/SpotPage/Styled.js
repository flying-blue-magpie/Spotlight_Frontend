import styled from 'styled-components';

export const Feature = styled.div`
  position: relative;
  padding-top: 175px;
`;

export const FeatureImage = styled.img`
  position: absolute;
  top: 0;
  display: block;
  height: 205px;
  width: 100%;
  object-fit: cover;
`;

export const FeatureInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  margin: 0 38px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  z-index: 1;
`;

export const SpotName = styled.span`
  color: #333333;
  font-size: 18px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.div`
  padding: 0 12px;
  margin-bottom: 6px;
  font-size: 15px;
`;

export const LikeLabel = styled.label`
  flex-shrink: 0;
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
