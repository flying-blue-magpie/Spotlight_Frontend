import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Row = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: solid 1px #DFDFDF;
  }
`;

export const UserName = styled.div`
  color: #333333;
  font-weight: bold;
  font-size: 14px;
`;

export const Comment = styled.div`
  color: #333333;
  font-size: 14px;
`;
