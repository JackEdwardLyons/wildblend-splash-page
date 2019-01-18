import React from 'react';
import styled from '@emotion/styled';

const HeroWrapper = styled.div`
  ${tw`min-h-screen`};
  background-color: #f5f3f7;
  /* background by SVGBackgrounds.com */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2376509a' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%2332184b' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%237b53a0' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%233c1d5a' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%237e59a1' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%2347236a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23815ea6' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%2352277a' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%238661ab' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%235b2d88' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%238c61b4' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%2367329b' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeroTxt = styled.div`
  ${tw`inline-block ml-10 p-8 text-white bg-purple-darker rounded`};
  margin-top: 15%;
  h1 {
    ${tw`mb-10 text-5xl italic`};
  }
  p {
    ${tw`text-lg`};
  }
`;

export default function hero() {
  return (
    <HeroWrapper>
      <HeroTxt>
        <h1>Gatsby Emotion Tailwind Starter</h1>
        <p>Welcome to your new starter, now go build something cool 😎</p>
      </HeroTxt>
    </HeroWrapper>
  );
}
