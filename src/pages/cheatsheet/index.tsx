import React from "react"
import { graphql } from "gatsby"
import ListOfPosts from "../../components/listOfPosts"
import SEO from "../../components/seo"
import Bio from "../../components/bio"
import Layout from "../../components/layout"

class CheatsheetIndex extends React.Component {
  render() {
    const { data, location } = this.props
      return (
          <Layout 
            location={location} 
            title={"Marcusmth"}
          >
            <SEO title="Software Engineering Cheatsheets" />
            <Bio />
            <ListOfPosts 
              data={data}
              posts={data.allMarkdownRemark.edges}
            />
          </Layout>
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
            isPublished
          }
        }
      }
    }
  }
`
