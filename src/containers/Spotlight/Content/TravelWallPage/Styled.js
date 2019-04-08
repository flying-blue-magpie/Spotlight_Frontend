import styled from 'styled-components';
import TravelCardComponent from 'components/TravelCard';

export const Container = styled.div`
  background-color: #FAFAFA;
  min-height: 100%;
  padding-bottom: 20px;
`;

export const TravelCard = styled(TravelCardComponent)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
