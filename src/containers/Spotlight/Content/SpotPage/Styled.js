import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Likes from 'components/Likes';
import { HEIGHT_NAVIGATION } from 'Styled/Settings/constants';

export const Container = styled.div`
  background-color: #FAFAFA;
  position: relative;
`;

export const Content = styled.div`
  height: calc(100vh - ${HEIGHT_NAVIGATION}px);
  overflow-y: auto;
`;

export const Feature = styled.div`
  position: relative;
  padding-top: 175px;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  position: absolute;
  z-index: 1;
  font-size: 18px;
  color: #333333;
  left: 15px;
  top: 14px;
  background-color: rgba(255, 255, 255, .6);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
`;

export const AddButton = styled(Link)`
  position: absolute;
  z-index: 1;
  font-size: 18px;
  color: #333333;
  right: 15px;
  top: 14px;
  background-color: rgba(255, 255, 255, .6);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-weight: bold;
`;

export const Title = styled.div`
  padding: 0 15px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333333;
  font-weight: bold;
`;

export const LikeButton = styled(Likes)`
  flex-shrink: 0;
`;

export const Paragraph = styled.p`
  padding: 0 15px;
  margin-bottom: 15px;
  color: #AAAAAA;
  line-height: 1.75;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 35px;
  }
`;
