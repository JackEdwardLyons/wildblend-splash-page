import tw, { styled } from 'twin.macro';

const StyledHero = styled.article`
  ${tw`mt-16 md:mt-32`};
  .hero-section {
    ${tw`flex flex-col content-center items-center`};
  }

  .hero-welcome {
    .gatsby {
      ${tw`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500`};
    }
  }

  h2 {
    ${tw`mt-12 text-xl font-light leading-loose md:text-2xl`};
    a {
      ${tw`border-b-2 border-yellow-500 hover:text-yellow-500`};
    }
  }

  .tech {
    ${tw`grid items-center grid-cols-3 mt-12 gap-x-2 md:(mt-24 gap-x-8)`};
    li {
      ${tw`w-full mx-auto light:text-dark md:mx-0 max-width[200px]`};
    }
  }
`;

export default StyledHero;
