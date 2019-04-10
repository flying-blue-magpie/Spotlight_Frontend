import uniqueId from 'lodash/uniqueId';
import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import Sortable from 'react-sortablejs';

import SpotCard from 'containers/Spotlight/Content/PlanningPage/DetailPlanningPage/Content/SpotCard';

import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  .sortable-ghost {
    opacity: 0.5
  }
  .sortable-chosen {
    background: white;
  }
`;

// Functional Component
const DragSortableList = (props) => {
  const { items, onChange } = props;
  // let sortable = null; // sortable instance
  // const reverseOrder = (evt) => {
  //   const order = sortable.toArray();
  //   onChange(order.reverse());
  // };

  const listItems = items.map((val, index) => (
    <div key={uniqueId()} data-id={JSON.stringify(val.toJS())}>
      <SpotCard
        spotIndexInfo={val}
        index={index}
        {...props}
      />
    </div>
  ));

  return (
    <StyledContainer>
      {/* <button type="button" onClick={reverseOrder}>Reverse Order</button> */}
      <Sortable
        // Sortable options (https://github.com/RubaXa/Sortable#options)
        options={{
          animation: 150,
          ghostClass: 'sortable-ghost', // Class name for the drop placeholder
          chosenClass: 'sortable-chosen', // Class name for the chosen item
          dragClass: 'sortable-drag', // Class name for the dragging item
          // delay: 300, // time in milliseconds to define when the sorting should start
        }}

        // [Optional] Use ref to get the sortable instance
        // https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute
        // ref={(c) => {
        //   if (c) {
        //     sortable = c.sortable;
        //   }
        // }}

        // [Optional] A tag or react component to specify the wrapping element. Defaults to "div".
        // In a case of a react component it is required to has children in the component
        // and pass it down.
        // tag="div"

        // [Optional] The onChange method allows you to implement a controlled component and keep
        // DOM nodes untouched. You have to change state to re-render the component.
        // @param {Array} order An ordered array of items defined by the `data-id` attribute.
        // @param {Object} sortable The sortable instance.
        // @param {Event} evt The event object.
        onChange={(
          order,
          // sortable,
          // evt
        ) => {
          onChange(order);
        }}
      >
        {listItems}
      </Sortable>
    </StyledContainer>
  );
};

DragSortableList.propTypes = {
  items: PropTypes.instanceOf(List),
  onChange: PropTypes.func,
};

DragSortableList.defaultProps = {
  items: List(),
  onChange: () => { },
};

export default DragSortableList;
