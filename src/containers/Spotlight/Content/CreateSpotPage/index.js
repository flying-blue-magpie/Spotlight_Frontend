import React from 'react';
import {
  Container,
  Cover,
  DefaultImage,
  UploadImageButton,
  Fields,
  Field,
  FieldName,
  TextInput,
  TextArea,
} from './Styled';
import defaultImageSrc from './default-image.svg';
import cameraImageSrc from './camera.svg';

const CreateSpotPage = () => (
  <Container>
    <Cover>
      <DefaultImage src={defaultImageSrc} />
      請上傳景點照片
      <UploadImageButton>
        <img src={cameraImageSrc} alt="上傳照片" />
      </UploadImageButton>
    </Cover>
    <Fields>
      <Field>
        <FieldName>景點名稱</FieldName>
        <TextInput placeholder="請輸入景點名稱" />
      </Field>
      <Field>
        <FieldName>景點地區</FieldName>
      </Field>
      <Field>
        <FieldName>景點地址</FieldName>
        <TextInput placeholder="請輸入具體地址" />
      </Field>
      <Field>
        <FieldName>電話</FieldName>
        <TextInput />
      </Field>
      <Field>
        <FieldName>網址</FieldName>
        <TextInput />
      </Field>
      <Field>
        <FieldName>景點備註</FieldName>
        <TextArea placeholder="可以寫上與景點有關資訊。例如遊玩方式、交通轉乘資訊或是景點相關簡介等等。" />
      </Field>
    </Fields>
  </Container>
);

export default CreateSpotPage;
