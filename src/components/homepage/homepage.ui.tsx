import React from 'react';
import { HomePageContainer, HeaderContainer } from './hompage.styled';
import Overlay from './overlay.ui';

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeaderContainer>
        <Overlay />
      </HeaderContainer>
    </HomePageContainer>
  );
};

export default HomePage;
