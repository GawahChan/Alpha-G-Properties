import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem 3rem 1rem;
  box-sizing: border-box;
  text-align: center;
`;

export const Container = styled.div`
  padding: 10px;
  width: 75%;
`;

export const ProfilePic = styled.div`
  background-image: url(${require('../../common/images/profilepic.png')});
  background-size: cover;
  background-position: center;
  border-radius: 50%;

  min-height: 13rem;
  min-width: 13rem;
  margin: 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
`;
