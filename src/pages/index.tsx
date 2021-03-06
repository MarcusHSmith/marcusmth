import React from "react"
import { graphql } from "gatsby"
import ListOfPosts from "../components/listOfPosts"
import Bio from "../components/bio"
import SEO from "../components/seo"
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout 
      location={location} 
      title={"Marcusmth"}
      >
        <SEO title="Marcus Smith Software Engineering Blog" />
        <Bio />
        <ListOfPosts 
          data={data}
          posts={data.allMarkdownRemark.edges}
        />
      </Layout>
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
            isPublished
          }
        }
      }
    }
  }
`
