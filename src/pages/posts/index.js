import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import { Layout } from '../../components';
import tw from 'twin.macro';

const PostLink = ({ post, image }) => (
  <Link to={post.id}>
    {image}

    <h2 tw="text-center text-xl font-semibold py-2 hover:underline shadow-md cursor-pointer hover:shadow-lg ">
      {post.frontmatter.title} ({post.frontmatter.date})
    </h2>
  </Link>
);

const PostPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => {
      const coverImage = edge.node.frontmatter.coverImage;
      const imgSrc = `images/${coverImage}`;
      const linkImage = (
        <img
          tw="filter hover:blur-sm"
          src={imgSrc}
          alt={edge.node.title ?? 'Wildblend image'}
        />
      );

      return (
        <li key={edge.node.id} tw="h-full ">
          <PostLink post={edge.node} image={linkImage}></PostLink>
        </li>
      );
    });

  return (
    <Layout>
      <h1 tw="text-3xl font-semibold underline mt-10 py-4 text-center mb-4">
        Wildblend posts
      </h1>
      <ul className="masonry" tw="grid grid-cols-3 gap-5">
        {Posts}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            coverImage
          }
        }
      }
    }
  }
`;

export default PostPage;
