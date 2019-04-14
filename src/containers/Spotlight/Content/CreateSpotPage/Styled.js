import styled from 'styled-components';

export const Container = styled.div`
`;

export const Cover = styled.div`
  height: 200px;
  background-color: #EEEEEE;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px 0 auto;
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
`;
