import React from 'react';
import {
  Container,
  Cover,
  DefaultImage,
  UploadImageButton,
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
  </Container>
);

export default CreateSpotPage;
