import styled from 'styled-components';

const tempCoverPath = 'https://attach.setn.com/newsimages/2016/12/30/761776-XXL.jpg';

export const DetailPlanningPageContainer = styled.div`
  .detail-planning__cover {
    position: relative;
    background-image: url(${tempCoverPath});
    background-size: cover;

    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 8px 16px;
    .detail-planning__cover-title {
      font-size: 18px;
      color: white;
      font-weight: 600;
    }
    .detail-planning__cover-period {
      font-size: 12px;
      color: white;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
  .detail-planning__info_wrapper {
    transform: translateY(32px);
  }
`;
