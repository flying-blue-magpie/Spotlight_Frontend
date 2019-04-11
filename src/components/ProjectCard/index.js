import React from 'react';
import PropTypes from 'prop-types';

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
  image: 'https://icrvb3jy.xinmedia.com/solomo/article/139141/7A21D0A7-AEA1-D18D-C305-9A5930D37D27.jpeg',
  title: '標題',
  subtitle: '副標題',
};

export default ProjectCard;
