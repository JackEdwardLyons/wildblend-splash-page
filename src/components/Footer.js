import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import WildblendGoldLogo from './img/WildBlendLogoGold';
import StyledFooter from './styled/footer';
import SocialList from './SocialList';

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(AuthorQuery);
  return (
    <StyledFooter>
      <WildblendGoldLogo />
      {/* {siteMetadata.title} */}

      <SocialList />
      <p className="author">
        Website created by{' '}
        <a
          href="https://jacklyons.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteMetadata.author}
        </a>
      </p>
    </StyledFooter>
  );
}

const AuthorQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
