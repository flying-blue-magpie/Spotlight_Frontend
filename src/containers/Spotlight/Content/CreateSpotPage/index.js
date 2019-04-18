import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Context from 'containers/Spotlight/Context';
import {
  HeaderLeftButtons,
  HeaderButton,
  HeaderTitle,
  HeaderRightButtons,
} from 'containers/Spotlight/Header/Styled';
import { submitCreateSpot } from 'containers/Spotlight/actions';
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

const CreateSpotPage = ({ handleSubmitCreateSpot }) => {
  const [uploadImageBase64, setUploadImageBase64] = useState('');
  const [spotName, setSpotName] = useState('');
  const [spotAddress, setSpotAddress] = useState('');
  const [spotPhoneNumber, setSpotPhoneNumber] = useState('');
  const [spotUrl, setSpotUrl] = useState('');
  const [spotNote, setSpotNote] = useState('');
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
  const handleOnSubmit = () => {
    history.goBack();
    handleSubmitCreateSpot({
      uploadImageBase64,
      spotName,
      spotAddress,
      spotPhoneNumber,
      spotUrl,
      spotNote,
    });
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
          <HeaderButton onClick={handleOnSubmit}>
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
            <TextInput
              value={spotName}
              placeholder="請輸入景點名稱"
              onChange={(e) => setSpotName(e.currentTarget.value)}
            />
          </Field>
          <Field>
            <FieldName>景點地區</FieldName>
          </Field>
          <Field>
            <FieldName>景點地址</FieldName>
            <TextInput
              value={spotAddress}
              placeholder="請輸入具體地址"
              onChange={(e) => setSpotAddress(e.currentTarget.value)}
            />
          </Field>
          <Field>
            <FieldName>電話</FieldName>
            <TextInput
              value={spotPhoneNumber}
              onChange={(e) => setSpotPhoneNumber(e.currentTarget.value)}
            />
          </Field>
          <Field>
            <FieldName>網址</FieldName>
            <TextInput
              value={spotUrl}
              onChange={(e) => setSpotUrl(e.currentTarget.value)}
            />
          </Field>
          <Field>
            <FieldName>景點備註</FieldName>
            <TextArea
              value={spotNote}
              onChange={(e) => setSpotNote(e.currentTarget.value)}
              placeholder="可以寫上與景點有關資訊。例如遊玩方式、交通轉乘資訊或是景點相關簡介等等。"
            />
          </Field>
        </Fields>
      </ContentContainer>
    </Container>
  );
};

CreateSpotPage.propTypes = {
  handleSubmitCreateSpot: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleSubmitCreateSpot: (spot) => dispatch(submitCreateSpot({
    name: spot.spotName,
    zone: '臺北市',
    describe: spot.spotNote,
    tel: spot.spotPhoneNumber,
    website: spot.spotUrl,
    address: spot.spotAddress,
    pic1: spot.uploadImageBase64.split('base64,')[1],
  })),
});

export default connect(null, mapDispatchToProps)(CreateSpotPage);
