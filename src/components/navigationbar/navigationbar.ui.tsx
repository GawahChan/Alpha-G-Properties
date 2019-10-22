import React from 'react';
import {
  NavigationBarContainer,
  Title,
  NavigationItems,
  Subtitle
} from './navigationbar.styled';

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <Title href="./">Alpha G Properties</Title>
      <NavigationItems>
        <Subtitle href="./about">About</Subtitle>
      </NavigationItems>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
