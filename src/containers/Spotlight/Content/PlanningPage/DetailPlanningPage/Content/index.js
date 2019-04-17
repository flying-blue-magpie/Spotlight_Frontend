import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DragSortableList from 'components/DragSortableList';
import { List, Map, fromJS } from 'immutable';
import { PAGE_NAME } from 'Styled/Settings/constants';
import AntdModal from 'antd/lib/modal';
import history from 'utils/history';
import mapPlusIconPath from 'assets/map_plus_icon.svg';
import arrowLeftGreyIconPath from 'assets/arrow_left_grey_icon.svg';
import {
  findAttributeInEvent,
} from 'utils/event';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';

import
SpotCard,
{
  HEIGHT_SPOT_CARD,
  HEIGHT_SPOT_TRAVEL_TIME,
} from './SpotCard';
import EditExistingSpotModal from './EditExistingSpotModal';
import AddSpotModal from './AddSpotModal';

const { confirm } = AntdModal;

const ADD_SPOT_MODAL = 'ADD_SPOT_MODAL';
const EDIT_EXISTING_SPOT_MODAL = 'EDIT_EXISTING_SPOT_MODAL';

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
  const [modal, setModal] = useState(null);
  const [addSpotAfterIndex, setAddSpotAfterIndex] = useState(null);
  const [selectedSpotId, setSelectedSpotId] = useState();
  const [arrangeState, setArrangeState] = useState(Map());
  const {
    isOwner,
    match,
    plan,
    spots,
    location,
    handleSubmitUpdateProject,
  } = props;
  const { projectId } = match.params;
  const searchParams = new URLSearchParams(location.search);
  const { search } = location;
  const day = parseInt(searchParams.get('day'), 10);
  const arrange = plan.getIn([day - 1, 'arrange']);

  useEffect(() => {
    setArrangeState(arrange);
  }, [day, arrange]);
  const handleShowAddSpotModal = useCallback((event) => {
    const insertAfterIndex = findAttributeInEvent(event, 'data-index');
    setModal(ADD_SPOT_MODAL);
    setAddSpotAfterIndex(insertAfterIndex);
  }, []);
  const handleShowModal = useCallback((event) => {
    const spotId = parseInt(findAttributeInEvent(event, 'data-spotid'), 10);
    setSelectedSpotId(spotId);
    setModal(EDIT_EXISTING_SPOT_MODAL);
  }, []);
  const handleHideModal = useCallback(() => {
    setModal(null);
  }, []);
  const handleDeleteSelectedSpot = useCallback(() => {
    const foundSpot = spots.get(selectedSpotId.toString());
    confirm({
      title: '刪除景點',
      content: `確認是否刪除 "${foundSpot.get('name')}"？`,
      okText: '刪除',
      okType: 'danger',
      onOk: () => {
        const updatedPlan = plan.updateIn([day - 1, 'arrange'], (arrs) => arrs.filter((arr) => arr.get('spot_id') !== selectedSpotId));
        handleSubmitUpdateProject(projectId, fromJS({ plan: updatedPlan }));
        setModal(null);
      },
    });
  }, [selectedSpotId, projectId]);
  const handleGoToUpdatingPage = useCallback(() => {
    const updatingSpotCardPagePath = `/${PAGE_NAME.UPDATING_SPOT_CARD.name}/${projectId}`;
    history.push({
      pathname: updatingSpotCardPagePath,
      search,
      state: { selectedSpotId },
    });
  }, [selectedSpotId, projectId, search]);
  const handleOnDragUpdate = useCallback((order) => {
    const updatedArrange = order.map((item) => JSON.parse(item));
    setArrangeState(fromJS(updatedArrange));
    const updatedPlan = plan.setIn([day - 1, 'arrange'], updatedArrange);
    handleSubmitUpdateProject(projectId, fromJS({ plan: updatedPlan }));
  }, [plan, day]);

  if (!arrangeState || arrangeState.size === 0) {
    return (
      <StyledContent>
        <div className="content__spot-cards-wrapper">
          {
            isOwner
              ? (
                <>
                  <SpotOperator>
                    <div
                      role="presentation"
                      className="operator__map-marker-wrapper"
                      data-index={1}
                      onClick={handleShowAddSpotModal}
                    >
                      <img src={mapPlusIconPath} className="operator__map-marker-icon" alt="" />
                    </div>
                  </SpotOperator>
                  <div className="content__default-message-wrapper">
                    <img className="content__arrow-left_grey-icon" src={arrowLeftGreyIconPath} alt="" />
                    <div className="content__default-message-text">按左側按鈕開始添加你的行程</div>
                  </div>
                  {modal === ADD_SPOT_MODAL && (
                    <AddSpotModal
                      onAddFromFavoriteClick={() => {
                        setModal(null);
                        history.push({
                          pathname: `/${PAGE_NAME.ADD_SPOT_TO_PLAN.name}/${projectId}`,
                          search: `${search}&afterIndex=${addSpotAfterIndex}`,
                          state: { afterIndex: addSpotAfterIndex },
                        });
                        setAddSpotAfterIndex(null);
                      }}
                      onCreateSpotButtonClick={() => {
                        history.push(`/${PAGE_NAME.CREATE_SPOT.name}`);
                      }}
                      onCancelClick={() => setModal(null)}
                    />
                  )}
                </>
              )
              : (
                <div className="content__default-message-wrapper">
                  <div className="content__default-message-text">尚未添加行程</div>
                </div>
              )
          }

        </div>
      </StyledContent>
    );
  }

  return (
    <StyledContent>
      <div className="content__spot-cards-wrapper">
        <div>
          {
            arrangeState.map((spot, index) => (
              <SpotOperator key={`day-${day}-${spot.get('spot_id')}-${index}`}>
                <div className="operator__number-wrapper">
                  {
                    Boolean(index) &&
                    <div className="operator__divider-line operator__divider-line-top" />
                  }
                  <div
                    role="presentation"
                    className="operator__number-circle-border"
                    data-spotid={spot.get('spot_id')}
                    onClick={isOwner ? handleShowModal : () => { }}
                  >
                    <span>{index + 1}</span>
                  </div>
                  {
                    ((arrangeState.size - 1 !== index) || isOwner) &&
                    <div className="operator__divider-line operator__divider-line-bottom" />
                  }
                </div>
                <div
                  role="presentation"
                  className="operator__map-marker-wrapper"
                  data-index={index + 1}
                  onClick={handleShowAddSpotModal}
                >
                  <img src={isOwner ? mapPlusIconPath : ''} className="operator__map-marker-icon" alt="" />
                </div>
              </SpotOperator>
            ))
          }
        </div>
        <DragSortableList
          dataSource={arrangeState}
          row={(spot, index) => (
            <SpotCard
              key={spot.get('spot_id')}
              spotIndexInfo={spot}
              index={index}
              {...props}
            />
          )}
          onChange={(updatedItems) => {
            handleOnDragUpdate(updatedItems);
          }}
          {...props}
        />
      </div>
      {modal === EDIT_EXISTING_SPOT_MODAL && (
        <EditExistingSpotModal
          onDeleteSpotClick={handleDeleteSelectedSpot}
          onCancelClick={handleHideModal}
          onEditSpotClick={handleGoToUpdatingPage}
        />
      )}
      {modal === ADD_SPOT_MODAL && (
        <AddSpotModal
          onAddFromFavoriteClick={() => {
            setModal(null);
            history.push({
              pathname: `/${PAGE_NAME.ADD_SPOT_TO_PLAN.name}/${projectId}`,
              search: `${search}&afterIndex=${addSpotAfterIndex}`,
              state: { afterIndex: addSpotAfterIndex },
            });
            setAddSpotAfterIndex(null);
          }}
          onCreateSpotButtonClick={() => {
            history.push(`/${PAGE_NAME.CREATE_SPOT.name}`);
          }}
          onCancelClick={() => setModal(null)}
        />
      )}
    </StyledContent>
  );
};

Content.propTypes = {
  isOwner: PropTypes.bool,
  plan: PropTypes.instanceOf(List),
  location: PropTypes.object,
  match: PropTypes.object,
  spots: PropTypes.instanceOf(Map),
  handleSubmitUpdateProject: PropTypes.func,
};

Content.defaultProps = {
  isOwner: false,
  plan: List(),
  location: {},
  match: {},
  spots: Map(),
  handleSubmitUpdateProject: () => { },
};


const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
