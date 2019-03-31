import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 36px;
`;

export const Card = styled.div`
  display: block;
`;

export const CardImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background: lightgray;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  background: lightgray;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: center;
`;
