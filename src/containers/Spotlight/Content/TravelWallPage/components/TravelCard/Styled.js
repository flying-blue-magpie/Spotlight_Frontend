import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);

  &:first-child {
    margin-top: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 15px;
  background: #FFFFFF;
`;

export const UserImage = styled.i`
  flex-shrink: 0;
  font-size: 45px;
  color: gray;
  margin-right: 5px;
`;

export const HeaderInfo = styled.div`
  flex-grow: 1;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const CardDate = styled.div`
  font-size: 12px;
  color: #AAAAAA;
`;

export const CardImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  height: 150px;
`;

export const CardTitle = styled.div`
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardSubtitle = styled.div`
  color: #AAAAAA;
  font-size: 12px;
`;

export const Footer = styled.div`
  background-color: #fff;
  display: flex;
  padding: 9px 15px;
  align-items: center;
`;

export const FooterInfo = styled.div`
  flex-grow: 1;
`;

export const LikeLabel = styled.label`
  flex-shrink: 0;
`;
