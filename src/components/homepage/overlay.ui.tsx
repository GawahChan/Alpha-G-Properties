import React from 'react';

import {
  OverlayContainer,
  OverlayTitle,
  OverlaySubtitle
} from './hompage.styled';

const Overlay = () => {
  return (
    <OverlayContainer>
      <OverlayTitle>Alpha G Properties</OverlayTitle>
      <OverlaySubtitle>
        Your first stop for prime property in London!
      </OverlaySubtitle>
    </OverlayContainer>
  );
};

export default Overlay;
