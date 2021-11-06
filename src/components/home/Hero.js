import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import StyledHero from './styled/hero';

export function WildBlendLogo() {
  return (
    <StaticImage
      src="../../images/wildblend_logo.jpg"
      alt="Wildblend logo"
      placeholder="blurred"
      layout="fixed"
      width={300}
      heright={300}
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
          Natural. My site is currently undergoing a facelift and will be back
          up soon.{' '}
          <Link to="/posts">
            You can still find all my blog posts by clicking here.
          </Link>
        </h2>

        <h2>
          If you would like to get in touch simply contact me using the form
          below.
        </h2>
      </section>
    </StyledHero>
  );
}
