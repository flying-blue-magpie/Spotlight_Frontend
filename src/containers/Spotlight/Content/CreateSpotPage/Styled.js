import styled from 'styled-components';
import {
  HeaderContainer as StyledHeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import {
  HEIGHT_HEADER,
  MAX_WIDTH,
} from 'Styled/Settings/constants';

export const Container = styled.div`
  padding-top: ${HEIGHT_HEADER}px;
`;

export const HeaderContainer = styled(StyledHeaderContainer)`
  height: ${HEIGHT_HEADER}px;
  background-color: #F9D94A;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: ${MAX_WIDTH}px;
`;

export const ContentContainer = styled.div`
  overflow-y: auto;
  height: calc(100vh - ${HEIGHT_HEADER}px);
`;

export const Cover = styled.div`
  position: relative;
  height: 200px;
  ${(props) => {
    if (props.coverImage) {
      return `
      background-image: url(${props.coverImage});
      background-size: cover;
      `;
    }
    return 'background-color: #eee;';
  }}
  color: #707070;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding-top: 43px;
`;

export const DefaultImage = styled.img`
  display: block;
  margin: 0 auto 15px;
`;

export const UploadImageButton = styled.button`
  background-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  cursor: pointer;
  outline: none;
  .upload-image-button__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Fields = styled.div`
  padding: 15px;
`;

export const Field = styled.div`
  border-radius: 20px;
  background-color: #EEEEEE;
  padding: 10px 0;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FieldName = styled.div`
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  flex-basis: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  color: #AAAAAA;
  font-size: 14px;
  background-color: transparent;
  appearance: none;
  outline: none;
  border: 0;
  flex-basis: 75%;

  &::placeholder {
    color: #AAAAAA;
  }
`;

export const TextArea = styled.textarea`
  color: #AAAAAA;
  font-size: 14px;
  background-color: transparent;
  appearance: none;
  outline: none;
  border: 0;
  height: 78px;
  flex-basis: 75%;

  &::placeholder {
    color: #AAAAAA;
  }
`;

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: #AAAAAA;
  flex-basis: 70%;
  outline: 0;
`;

export const ArrowIcon = styled.i`
  flex-basis: 5%;
  font-size: 18px;
  color: #333333;
`;
