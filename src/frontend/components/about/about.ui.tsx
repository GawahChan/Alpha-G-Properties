import React from 'react';
import {
  AboutContainer,
  ProfilePic,
  Title,
  Subtitle,
  Container
} from './about.styled';

const About = () => {
  return (
    <AboutContainer>
      <ProfilePic />
      <Container>
        <Title>Welcome!</Title>
        <p>
          This Alpha G Properties Project is a remake of my old Alpha Properties
          team project from Kodiri Bootcamp
        </p>
        <p>
          You can check out the original project here:{' '}
          <a href="https://alpha-properties-app.appspot.com/">
            Alpha Properties
          </a>
        </p>
      </Container>
      <Container>
        <Subtitle>Why the remake?</Subtitle>
        <p>
          Well at the time of creation, the original Alpha Properties Project
          was created when we were all very new to coding. At the time, we all
          pretty much had only around 1 month coding experience. A lot has
          changed since then!
        </p>
        <p>
          After revisiting this project, I wanted to build on it. Since the
          bootcamp is now over and we've all gone our seperate ways, I've
          decided to try and remake this project on my own, learning from my
          past experience and finding new ways to improve it. Besides, it's also
          fun to revisit an old project!
        </p>
        <Subtitle>
          If you're interested, feel free to contact me{' '}
          <a
            href="https://gawahchan.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </Subtitle>
      </Container>
    </AboutContainer>
  );
};

export default About;
