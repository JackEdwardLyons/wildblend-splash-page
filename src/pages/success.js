import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';
import { Layout, Seo } from '../components';

const StyledH1 = styled.h1`
  ${tw`mt-10 text-base font-extrabold leading-tight md:text-6xl`};
`;
export default function IndexPage() {
  return (
    <Layout>
      <Seo description="Home page for a Gatsby Starter, featuring Emotion and Tailwind css" />
      <StyledH1 class="gatsby">Success, your message was sent.</StyledH1>
    </Layout>
  );
}
