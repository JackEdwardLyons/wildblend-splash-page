import React from 'react';
import { Link } from 'gatsby';

import StyledNav from './styled/nav';
import WildblendGoldLogo from './img/WildBlendLogoGold';

export default function Nav() {
  return (
    <StyledNav aria-label="Main Navigation">
      <WildblendGoldLogo />

      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </StyledNav>
  );
}
