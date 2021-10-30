import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

function WildblendGoldLogo() {
  return (
    <StaticImage
      src="../../images/icon/logo-gold.png"
      alt="Wildblend logo gold"
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={100}
    />
  );
}

export default WildblendGoldLogo;
