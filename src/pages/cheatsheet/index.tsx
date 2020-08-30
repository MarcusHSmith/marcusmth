import React from "react"
import { graphql } from "gatsby"
import ListOfPosts from "../../components/listOfPosts"

class CheatsheetIndex extends React.Component {
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

export default CheatsheetIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___lastUpdated], order: DESC }
      filter: { frontmatter: { path: { eq: "cheatsheet"}}}
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
