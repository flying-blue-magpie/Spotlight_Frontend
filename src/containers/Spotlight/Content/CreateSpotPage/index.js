import React, { useContext, useEffect, useState } from 'react';
import Context from 'containers/Spotlight/Context';
import {
  HeaderLeftButtons,
  HeaderButton,
  HeaderTitle,
  HeaderRightButtons,
} from 'containers/Spotlight/Header/Styled';
import history from 'utils/history';
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
  HeaderContainer,
  ContentContainer,
} from './Styled';
import defaultImageSrc from './default-image.svg';
import cameraImageSrc from './camera.svg';

const { SpotlightContext } = Context;

const CreateSpotPage = () => {
  const [uploadImageBase64, setUploadImageBase64] = useState('');
  const inputRef = React.createRef();
  const { setIsHeaderVisible, setIsNavVisible } = useContext(SpotlightContext);
  useEffect(() => {
    setIsHeaderVisible(false);
    setIsNavVisible(false);

    return () => {
      setIsHeaderVisible(true);
      setIsNavVisible(true);
    };
  }, []);
  const handleTriggerUpload = () => {
    inputRef.current.click();
  };
  const handleReadURL = () => {
    const inputFiles = inputRef.current.files;
    if (inputFiles && inputFiles[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setUploadImageBase64(e.target.result);
      };

      reader.readAsDataURL(inputFiles[0]);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderLeftButtons>
          <HeaderButton onClick={() => history.goBack()}>
            <i className="fas fa-arrow-left" />
          </HeaderButton>
        </HeaderLeftButtons>
        <HeaderTitle>
          自建景點
        </HeaderTitle>
        <HeaderRightButtons>
          <HeaderButton onClick={() => history.goBack()}>
            <i className="fas fa-arrow-right" />
          </HeaderButton>
        </HeaderRightButtons>
      </HeaderContainer>
      <ContentContainer>
        <Cover coverImage={uploadImageBase64}>
          {
            !uploadImageBase64 &&
            <>
              <DefaultImage src={defaultImageSrc} />
              請上傳景點照片
            </>
          }
          <UploadImageButton type="file" onClick={handleTriggerUpload}>
            <input ref={inputRef} type="file" onChange={handleReadURL} accept="image/*" style={{ display: 'none' }} />
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
      </ContentContainer>
    </Container>
  );
};

export default CreateSpotPage;
