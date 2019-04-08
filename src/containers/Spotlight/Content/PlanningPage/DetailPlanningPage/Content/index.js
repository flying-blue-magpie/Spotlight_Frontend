import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// http://front-ender.me/react-drag-list
import ReactDragList from 'react-drag-list';
import 'react-drag-list/assets/index.css';
import { List } from 'immutable';
import { PAGE_NAME } from 'Styled/Settings/constants';
import Modal from 'components/Modal';
import history from 'utils/history';
import mapPlusIconPath from 'assets/map_plus_icon.svg';
import arrowLeftGreyIconPath from 'assets/arrow_left_grey_icon.svg';
import {
  findAttributeInEvent,
} from 'utils/event';
import SpotOperationBtn from './SpotOperationBtn';

import SpotCard, {
  HEIGHT_SPOT_CARD,
  HEIGHT_SPOT_TRAVEL_TIME,
} from './SpotCard';

const modalStyle = {
  bottom: '0px',
  width: '100%',
  // height: '245px',
};

const StyledContent = styled.div`
  padding: 15px 15px;
  padding-top: 0;
  .content__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .content__title-day {
    font-size: 16px
  }
  .content__title-date {
    font-size: 12px;
  }
  .content__simple-drag {
    background: yellow;
  }
  .content__simple-drag-row {
    background: red;
  }

  .content__spot-cards-wrapper {
    display: flex;
  }
  .content__spot-simple-drag {
    flex: 1 1 auto;
  }

  .content__default-message-wrapper {
    display: flex;
    padding: 0px 15px;
    align-items: center;
  }
  .content__default-message-text {
    font-size: 18px;
    color: #AAAAAA;
    font-weight: 400;
  }
  .content__arrow-left_grey-icon {
    width: 20px;
    height: 14px;
    margin-right: 9px;
  }
`;

const SpotOperator = styled.div`
  height: ${HEIGHT_SPOT_CARD + HEIGHT_SPOT_TRAVEL_TIME}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .operator__number-wrapper {
    height: ${HEIGHT_SPOT_CARD}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .operator__number-circle-border {
    border: 2px solid rgba(51, 51, 51, 1);
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    font-weight: 500;
    border-radius: 100%;
    width: 29px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    background: white;
    &:hover {
      background: rgba(51, 51, 51, 1);
      color: ${(props) => props.theme.mainColor};
    }
  }
  .operator__divider-line {
    position: absolute;
    width: 2px;
    background: rgba(170, 170, 170, 1);
    height: 40px;
  }
  .operator__divider-line-top {
    top: -20px;
  }
  .operator__divider-line-bottom {
    bottom: -20px;
  }
  .operator__map-marker-wrapper {
    height: ${HEIGHT_SPOT_TRAVEL_TIME}px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .operator__map-marker-icon {
    height: 33px;
    z-index: 1;
    background: white;
    cursor: pointer;
    &:hover {
      color: #bbbbbb;
    }
  }
`;

const Content = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    plan,
  } = props;
  const handleGoToAddSpot = useCallback((event) => {
    const { projectId } = props.match.params;
    const { search } = props.location;
    const insertAfterIndex = findAttributeInEvent(event, 'data-index');
    const addSpotToPlanPagePath = `/${PAGE_NAME.ADD_SPOT_TO_PLAN.name}/${projectId}`;
    history.push({
      pathname: addSpotToPlanPagePath,
      search: `${search}&afterIndex=${insertAfterIndex}`,
      state: { afterIndex: insertAfterIndex },
    });
  });
  const handleShowModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);
  const handleHideModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const searchParams = new URLSearchParams(window.location.search);
  const day = parseInt(searchParams.get('day'), 10);
  const arrange = plan.getIn([day - 1, 'arrange']);
  if (arrange.size === 0) {
    return (
      <StyledContent>
        <div className="content__spot-cards-wrapper">
          <SpotOperator>
            <div
              role="presentation"
              className="operator__map-marker-wrapper"
              data-index={1}
              onClick={handleGoToAddSpot}
            >
              <img src={mapPlusIconPath} className="operator__map-marker-icon" alt="" />
            </div>
          </SpotOperator>
          <div className="content__default-message-wrapper">
            <img className="content__arrow-left_grey-icon" src={arrowLeftGreyIconPath} alt="" />
            <div className="content__default-message-text">按左側按鈕開始添加你的行程</div>
          </div>
        </div>
      </StyledContent>
    );
  }
  return (
    <StyledContent>
      <div className="content__spot-cards-wrapper">
        <div>
          {
            arrange.map((spot, index) => (
              <SpotOperator key={spot.get('spot_id')}>
                <div className="operator__number-wrapper">
                  {
                    Boolean(index) &&
                    <div className="operator__divider-line operator__divider-line-top" />
                  }
                  <div
                    role="presentation"
                    className="operator__number-circle-border"
                    onClick={handleShowModal}
                  >
                    <span>{index + 1}</span>
                  </div>
                  <div className="operator__divider-line operator__divider-line-bottom" />
                </div>
                <div
                  role="presentation"
                  className="operator__map-marker-wrapper"
                  data-index={index + 1}
                  onClick={handleGoToAddSpot}
                >
                  <img src={mapPlusIconPath} className="operator__map-marker-icon" alt="" />
                </div>
              </SpotOperator>
            ))
          }
        </div>
        <ReactDragList
          dataSource={arrange}
          row={(spot, index) => (
            <SpotCard
              key={spot.get('spot_id')}
              spotIndexInfo={spot}
              index={index}
              {...props}
            />
          )}
          handles={false}
          className="simple-drag content__spot-simple-drag"
          rowClassName="simple-drag-row"
          onUpdate={() => { }}
        />
      </div>
      <Modal
        optionStyle={modalStyle}
        isVisible={isModalVisible}
      >
        <SpotOperationBtn
          handleHideModal={handleHideModal}
        />
      </Modal>
    </StyledContent>
  );
};

Content.propTypes = {
  plan: PropTypes.instanceOf(List),
  location: PropTypes.object,
  match: PropTypes.object,
};

Content.defaultProps = {
  plan: List(),
  location: {},
  match: {},
};

export default Content;
