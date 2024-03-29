import React, { ReactElement } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

export default function Header({isFull}: {isFull: boolean}): ReactElement {
  const data = useStaticQuery(graphql`
      query HeaderQuery {
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
      }}
      className="bg-orange-500"
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginTop: 10,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author}</strong> lives and works in New York City. He is a
        software engineer focused on iOS and React development. This is used as
        a repository for information learned and utilized.
        <br />
        <a href={`/`}>Posts</a>
        {` `}
        <a href={`/cheatsheet`}>Cheatsheets</a>
        {` `}
        <a href={`/drone`}>Drone</a>
        <br />
        <a href={`https://www.instagram.com/${social.instagram}`}>Instagram</a>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
        {` `}
        <a href={`https://stackoverflow.com/users/2228688/marcus`}>
          Stack Overflow
        </a>
        {` `}
        <a href={`https://www.linkedin.com/in/marcushsmith/`}>LinkedIn</a>
        {` `}
        <a href={`https://www.strava.com/athletes/9512`}>Strava</a>
        {` `}
        <a href={`https://goo.gl/maps/QSQCaP3AMVgakqHo7`}>Local Guide</a>
      </p>
    </div>
  )
}
