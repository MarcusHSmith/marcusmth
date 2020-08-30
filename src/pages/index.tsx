import React from "react"
import { graphql } from "gatsby"
import ListOfPosts from "../components/listOfPosts"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    return (
      <ListOfPosts 
        data={this.props}
        posts={data.allMarkdownRemark.edges}
      />
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___lastUpdated], order: DESC }
      filter: { frontmatter: { path: { eq: "blog"}}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            lastUpdated(formatString: "MMMM DD, YYYY")
            title
            description
            path
          }
        }
      }
    }
  }
`
