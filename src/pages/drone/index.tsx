import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Bio from "../../components/bio"
import MailChimpForm from "../../components/mailChimpForm"
import { Segment } from 'semantic-ui-react';
import { rhythm } from "../../utils/typography"

class DroneIndex extends React.Component {
  render() {
    const { data, location } = this.props

      return (
        <Layout 
        location={location} 
        isFullHeader={true}
>
        <SEO title="Marcus Smith Drone Footage" />
        {data.allMarkdownRemark.edges
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Segment key={title}>
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.lastUpdated}</small>
                </header>
              </article>
              </Segment>
            )
          })}
        <MailChimpForm />
      </Layout>
      )
  }
}

export default DroneIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { path: { eq: "drone"}}}
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
            videoId
            path
          }
        }
      }
    }
  }
`
