import React from 'react';
import { Link } from 'gatsby';

import StyledNav from './styled/nav';
import WildblendGoldLogo from './img/WildBlendLogoGold';

export default function Nav() {
  return (
    <StyledNav aria-label="Main Navigation">
      <Link to="/" className="logo">
        {' '}
        <WildblendGoldLogo />
      </Link>

      <Link to="/about">about</Link>
      <Link to="/posts">posts</Link>
    </StyledNav>
  );
}
