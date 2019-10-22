import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
    url(${require(`../../common/images/london-skyline.png`)});
  background-size: cover;
  background-position: top;
  min-height: 100vh;
  width: 100%;

  box-sizing: border-box;
  padding: 2rem;
`;

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  text-align: center;
  margin-top: 2rem;
`;

export const OverlayTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
`;

export const OverlaySubtitle = styled.h3`
  font-weight: 400;
  font-size: 2rem;
`;
