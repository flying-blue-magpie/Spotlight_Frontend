import styled from 'styled-components';

export const Container = styled.div`
margin-top: 10px;
.travel-card__header-wrapper {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: #D3D3D3;
  .travel-card__header-image {
    font-size: 30px;
    color: white;
  }
  .travel-card__profile-wrapper {
    margin-left: 10px;
  }
  .travel-card__header-name {
    font-size: 12px;
    color: #707070;
  }
  .travel-card__header-time {
    font-size: 12px;
    color: #A4A4A4;
  }
}
.travel-card__body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 120px;
  background: black;
  color: white;
  position: relative;
  cursor: pointer;
  .travel-card__body-cover {
    opacity: 0.5;
    background-image: url(${(props) => props.imagePath});
    background-size: cover;
    height: 100%;
  }
  .travel-card__body-text-wrapper {
    position: absolute;
    padding: 10px;
    .travel-card__body-title {
      font-size: 16px;
      color: white;
    }
    .travel-card__body-period {
      font-size: 12px;
    }
  }
}
.travel-card__footer-wrapper {
  background: #D3D3D3;
  padding: 13px 12px;
  display: flex;
  align-items: center;
  .travel-card__footer-icon {
    font-size: 16px;
    color: #707070;
  }
  .travel-card__footer-number {
    font-size: 12px;
    color: #707070;
    margin-left: 5px;
  }
}
`;