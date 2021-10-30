import React from 'react';

import { Layout, Seo } from '../components';
import StyledAboutPg from '../components/about/aboutStyles';

export default function AboutPage() {
  return (
    <Layout>
      <Seo title="About" description="About Us page" />
      <StyledAboutPg>
        <h1>About</h1>
        <div>
          <div className="section starter">
            <h2>Zoe Lyons, founder of Wildblend</h2>
            <p>
              As an Iranian-looking half Greek half Austrian who migrated to
              Australia to live and work here with my Australian husband, I'm a
              cultural chameleon. My mixed background is probably one of the
              main reasons why I feel most comfortable when I'm on the road
              working remotely. I've lived and worked in Europe, Australia,
              China and the US over the last 5 years.
            </p>
          </div>
          <div className="section tech">
            <h2>What I do</h2>
            <ul>
              <li>
                <p>
                  As of now, I am based on the Gold Coast, Australia where I
                  create cookbooks for PaleoHacks. I also produce content,
                  create recipes, and take pictures for my personal brand -
                  Wildblend.co. My work as a recipe developer and nutritional
                  writer has taught me that more and more people realize that
                  what we put in our bodies has a direct effect on our health
                  but also on our success and happiness in life. I love to dig
                  deep and find out everything there is to know about foods,
                  ancestral diets, supplements, and training methods.
                </p>
              </li>
            </ul>
          </div>
          <div className="section ">
            <h2>Features</h2>
            <ul>
              <li>
                <p>
                  Apart from travelling my life is pretty much dedicated to
                  health and fitness; I'm a Paleo eater, crossfitter, health nut
                  and lover of all things untamed and natural. In the last year,
                  I taught myself the advantages of a Paleo/Bulletproof
                  lifestyle and ketogenic diet, the foundations of food
                  photography, social media marketing and how to become a health
                  food and fitness blogger. <a href="/">Let´s get in touch!</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </StyledAboutPg>
    </Layout>
  );
}
