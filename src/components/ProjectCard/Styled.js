import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: block;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  height: 140px;
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 9px 15px;
  background-color: #fff;
`;

export const Title = styled.div`
  color: #333333;
  font-size: 16px;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  color: #AAAAAA;
  font-size: 12px;
`;
