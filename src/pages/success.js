import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';
import { Layout, Seo } from '../components';
import { Link } from 'gatsby';

const StyledH1 = styled.h1`
  ${tw`mt-10 text-base text-xl font-bold leading-tight`};
`;
export default function IndexPage() {
  return (
    <Layout>
      <Seo description="Home page for a Gatsby Starter, featuring Emotion and Tailwind css" />
      <StyledH1 class="gatsby">Success, your message was sent.</StyledH1>
      <br />
      <Link tw="underline" to="/">
        Click here to go back home.
      </Link>
    </Layout>
  );
}
