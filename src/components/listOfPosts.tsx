import React from "react"

import { Segment } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
import { rhythm } from "../utils/typography";
import { Link } from "gatsby";
import MailChimpForm from "./mailChimpForm";

const ListOfPosts = (props: { data: any, posts: any, location: any }) => {
    return (
    <>
        {props.posts
          .filter(({ node }) => node.frontmatter.isPublished)
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
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
              </Segment>
            )
          })}
        <MailChimpForm />
      </>
    )
}

export default ListOfPosts