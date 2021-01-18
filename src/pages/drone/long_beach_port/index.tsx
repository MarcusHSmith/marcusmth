import React from "react"

import Bio from "../../../components/bio"
import Layout from "../../../components/layout"
import MailChimpForm from "../../../components/mailChimpForm"
import SEO from "../../../components/seo"
import YoutubePlayer from "../../../components/youtube-player"

class BlogIndex extends React.Component {
  render() {
    const siteTitle = "Marcusmth"
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Drone DJI : Long Beach Port" />
        <header>
            <Bio />
        </header>
        <br />
        <YoutubePlayer videoId={"ht4fjZUJLXM"}/>
        <footer>
            <MailChimpForm />
        </footer>
      </Layout>
    )
  }
}

export default BlogIndex
