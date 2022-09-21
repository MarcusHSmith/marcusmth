import React from "react"
import { Header } from "semantic-ui-react"
import Bio from "../../../components/bio"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const BausApp = ({location}) => {
  return (
    <Layout 
    location={location} 
    title={"Marcusmth"}
    >
      <SEO title="Baus App" description="iOS App data"/>
      <Bio/>
      <Header>Support for Baus App</Header>
      <p>Contact Marcus on Twitter</p>
      <a href={`https://twitter.com/marcusmth`}>Twitter</a>
      <br/>
      <a href={`/projects/baus/privacypolicy/`}>Privacy Policy</a>
    </Layout>
  )
}

export default BausApp
