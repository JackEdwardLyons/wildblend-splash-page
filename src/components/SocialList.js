import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { StyledSocialList, StyledButton } from './styled';

export default function SocialList(props) {
  return (
    <StyledSocialList {...props}>
      <li>
        <StyledButton
          as="a"
          href="https://instagram.com/wildblend"
          aria-label="Wildblend instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://www.linkedin.com/in/zoelyons/"
          aria-label="Zoe Lyons LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </StyledButton>
      </li>
    </StyledSocialList>
  );
}
