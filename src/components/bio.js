import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-marcus.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author}</strong> lives and works in New York City. This is used
        as a repository for information learned and utilized.
        {` `}
        <a href={`/`}>Posts</a>
        {` `}
        <a href={`/cheatsheet`}>Cheatsheets</a>
        {` `}
        <a href={`/drone`}>Drone</a>
        {` `}
        <a href={`https://www.instagram.com/${social.instagram}`}>Instagram</a>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
      </p>
    </div>
  )
}

export default Bio
