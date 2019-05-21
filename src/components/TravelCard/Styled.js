import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 15px;
  background: #FFFFFF;
`;

export const UserImage = styled.img`
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Review = styled.div`
  flex-shrink: 0;
  font-size: 14px;
  color: #333333;
  display: flex;
  align-items: center;

  &:before {
    font-family: "Font Awesome 5 Free";
    content: "\f005";
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    color: #FBE45A;
    margin-right: 6px;
  }
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

export const FooterButtons = styled.div`
  display: flex;
  padding: 0 15px 10px 15px;
  background-color: #fff;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  color: #AAAAAA;
  font-size: 14px;
  margin-left: 30px;
`;

export const CommentIcon = styled.div`
  margin-right: 6px;
  background-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .16);
  color: #AAAAAA;
  display: flex;
  justify-content: center;
  align-items: center;
`;
