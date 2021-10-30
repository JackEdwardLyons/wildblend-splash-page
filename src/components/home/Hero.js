import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import StyledHero from './styled/hero';

export function WildBlendLogo() {
  return (
    <StaticImage
      src="../../images/wildblend_logo_2.png"
      alt="Wildblend logo"
      placeholder="blurred"
      layout="fixed"
    />
  );
}

export default function Hero() {
  return (
    <StyledHero>
      <section className="hero-section">
        <div tw="flex items-center">
          <WildBlendLogo />
        </div>

        <h2>
          Zoe Lyons, from Australia. Loves Unicorn Food and Lifting, A
          Challenge, Crossfit, Happiness and Health, All Things Wild &amp;
          Natural. My site is currently undergoing a facelift, but if you would
          like to get in touch simply contact me using the form below.
        </h2>
      </section>
    </StyledHero>
  );
}
