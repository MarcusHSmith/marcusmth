import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import MailChimpForm from "../components/mailChimpForm"
import YoutubePlayer from "../components/youtube-player"
import { Label } from "semantic-ui-react"
import kebabCase from "lodash/kebabCase"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout location={this.props.location} title="Posts">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`
              }}
            >
              {post.frontmatter.date}
            </p>
                        <div 
                style={{
                display: `flex`, flexWrap: 'wrap'
            }}>
                {post.frontmatter.tags.sort().map(tag => (
                    <Link style={{ boxShadow: `none`, paddingBottom: 8, paddingRight: 8 }} to={`/tags/${kebabCase(tag)}/`}>
                        <Label color='blue' size='small'>{kebabCase(tag)}</Label>
                    </Link>
         )
        )}
        </div>
          </header>
          <p>{post.videoId}</p>
          {post.frontmatter.videoId !== null && (<YoutubePlayer videoId={post.frontmatter.videoId}/>)}
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <MailChimpForm />
            <Bio />
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
        videoId
      }
    }
  }
`
