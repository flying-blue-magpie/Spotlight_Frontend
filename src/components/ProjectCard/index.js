import React from 'react';
import PropTypes from 'prop-types';
import defaultBackgroundImagePath from 'assets/default_background_3x.png';

import {
  Container,
  Image,
  Info,
  Title,
  Subtitle,
} from './Styled';

const ProjectCard = ({
  className,
  to,
  image,
  title,
  subtitle,
}) => (
  <Container to={to} className={className}>
    <Image src={image} alt={title} />
    <Info>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Info>
  </Container>
);

ProjectCard.propTypes = {
  className: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

ProjectCard.defaultProps = {
  image: defaultBackgroundImagePath,
  title: '標題',
  subtitle: '副標題',
};

export default ProjectCard;
