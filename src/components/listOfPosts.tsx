import React from "react"

import { Segment } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
import { rhythm } from "../utils/typography";
import { Link } from "gatsby";
import Img from "gatsby-image"

const ListOfPosts = (props: { data: any, posts: any, location: any }) => {
    return (
    <>
        {props.posts
          .filter(({ node }) => node.frontmatter.isPublished)
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredimage = node.frontmatter.featuredimage
            return (
              <Segment key={title}>
              <article key={node.fields.slug}>
                <div className="flex flex-row justify-between flex-nowrap gap-x-4">
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
                    <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                  </header>
                  
                                      {
                  featuredimage && (
                    <div className="shrink-0 h-20 w-20">
                      <Img
                        fluid={featuredimage.src.childImageSharp.fluid}
                        alt={featuredimage.alt}
                      />
                    </div>
                  )
                }
                  
                </div>
                

              </article>
              </Segment>
            )
          })}
      </>
    )
}

export default ListOfPosts