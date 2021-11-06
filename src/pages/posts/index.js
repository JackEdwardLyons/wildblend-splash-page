import React from 'react';

import tw from 'twin.macro';
import { Link, graphql } from 'gatsby';
import { Layout } from '../../components';

const PostLink = ({ post }) => (
  <h2>
    <Link to={post.id}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </h2>
);

const PostPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => (
      <li
        tw="py-2 text-xl hover:underline hover:text-yellow-600"
        key={edge.node.id}
      >
        <PostLink post={edge.node} />
      </li>
    ));
  return (
    <Layout>
      <h1 tw="text-2xl underline mt-10 py-4 ">Wildblend posts</h1>
      <ul tw="list-disc">{Posts}</ul>
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
          }
        }
      }
    }
  }
`;

export default PostPage;
