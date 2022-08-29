import React from "react"
import { graphql } from "gatsby"
import ListOfPosts from "../components/listOfPosts"
import SEO from "../components/seo"
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout 
      location={location} 
      isFullHeader={true}
      >
        <SEO title="Marcus Smith Software Engineering Blog" />
        <ListOfPosts 
          data={data}
          posts={data.allMarkdownRemark.edges}
        />
      </Layout>
    )
  }
}

export default BlogIndex

/**
 * The simplest set of fields for fluid images
 * @type {Fragment}
 */
 export const GatsbyImageSharpFluid = graphql`
 fragment GatsbyImageSharpFluid on ImageSharpFluid {
   base64
   aspectRatio
   src
   srcSet
   sizes
 }
`

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
            featuredImage {
              src {
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`
