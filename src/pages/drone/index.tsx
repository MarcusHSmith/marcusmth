import React from "react"
import { graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import YoutubePlayer from "../../components/youtube-player"
import { rhythm } from "../../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Marcusmth"
    const posts = data.allYoutubeVideo.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All drone posts" />
        <Bio />
        {posts
          .filter(({ node }) => node.description.includes("Drone"))
          .reverse()
          .map(({ node }) => {
            const title = node.title
            return (
              <article key={node.id}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    {title}
                  </h3>
                  <small>{node.publishedAt}</small>
                </header>
                <section>
                  <>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.description,
                      }}
                    />
                    <YoutubePlayer videoId={node.videoId}/>
                  </>
                </section>
              </article>
            )
          })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allYoutubeVideo(filter: { channelId: { eq: "UCzLPnJlM_5IEe2djVMB2jLA" } }) {
      edges {
        node {
          id
          title
          thumbnail {
            url
            width
            height
          }
          description
          videoId
          publishedAt(formatString: "MMMM DD, YYYY")
          privacyStatus
          channelTitle
        }
      }
    }
  }
`
