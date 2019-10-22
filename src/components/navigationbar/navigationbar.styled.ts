import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  background-color: black;
  text-align: center;
  width: 100%;

  box-sizing: border-box;
  padding: 10px;
`;

export const Title = styled.a`
  outline: none;
  text-decoration: none;
  color: white;
  margin: 0;

  font-size: 1.5rem;
  font-weight: 400;
`;

export const NavigationItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Subtitle = styled.a`
  outline: none;
  text-decoration: none;
  color: white;
  margin: 0;

  font-size: 1rem;
  font-weight: 400;
`;
