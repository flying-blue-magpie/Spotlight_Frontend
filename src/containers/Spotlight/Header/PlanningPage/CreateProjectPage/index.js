import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { DEFAULT_PROJECT } from 'containers/Spotlight/constants';
import moment from 'moment';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  PAGE_NAME,
} from 'Styled/Settings/constants';
import message from 'antd/lib/message';

import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import history from 'utils/history';
import Context from 'containers/Spotlight/Context';
import {
  submitCreateProject,
} from 'containers/Spotlight/actions';

const { SpotlightContext } = Context;

const CreateProjectPage = (props) => {
  const context = useContext(SpotlightContext);
  const {
    setIsNavVisible,
    newProject,
    setNewProject,
  } = context;
  const setInit = () => {
    setNewProject(fromJS(DEFAULT_PROJECT));
  };
  const handleOnCancelBtn = () => {
    history.push(PAGE_NAME.PLANNING.name);
  };
  const handleOnCheckBtn = () => {
    const {
      handleSubmitCreateProject,
    } = props;
    const name = newProject.get('name');
    const startDay = moment(newProject.get('start_day')).format('YYYY/MM/DD 00:mm:ss');
    const days = newProject.get('tot_days');
    if (!name || !newProject.get('start_day')) {
      message.error('欄位皆為必填');
      return;
    }
    if (days <= 0) {
      message.error('天數格式錯誤');
      return;
    }
    handleSubmitCreateProject({
      name,
      start_day: startDay,
      tot_days: days,
    });
    history.push(`/${PAGE_NAME.PLANNING.name}`);
  };
  useEffect(() => {
    setIsNavVisible(false);
    setInit();
    return () => {
      setIsNavVisible(true);
    };
  }, []);

  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i
          role="presentation"
          className="fas fa-times icon-style"
          onClick={handleOnCancelBtn}
        />
      </div>
      <div>{PAGE_NAME.CREATE_PROJECT.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i
          role="presentation"
          className="fas fa-check icon-style"
          onClick={handleOnCheckBtn}
        />
      </div>
    </HeaderContainer>
  );
};

CreateProjectPage.propTypes = {
  handleSubmitCreateProject: PropTypes.func,
};

CreateProjectPage.defaultProps = {
  handleSubmitCreateProject: () => { },
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitCreateProject: (newProject) => dispatch(submitCreateProject(newProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectPage);
