import React from 'react';

import { graphql } from 'gatsby';
import { Layout, Seo } from '../../components';
import tw, { styled } from 'twin.macro';

const StyledPost = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    padding: 1rem 0 0.5rem;
  }

  p {
    padding: 0.25rem 0;
  }

  img {
    padding: 1rem;
  }
`;

function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <h1 tw="text-2xl py-4">{frontmatter.title}</h1>
      <h2 tw="text-xl py-2">{frontmatter.date}</h2>
      <StyledPost
        className="post-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        coverImage
      }
      timeToRead
      tableOfContents
      wordCount {
        words
      }
    }
  }
`;

export default BlogPostTemplate;
