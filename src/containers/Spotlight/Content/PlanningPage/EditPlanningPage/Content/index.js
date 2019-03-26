import React from 'react';

const Content = (props) => {
  const {
    location,
  } = props;
  const searchParams = new URLSearchParams(location.search);
  const day = searchParams.get('day');
  return (
    <div>Day{day}</div>
  );
};

export default Content;
