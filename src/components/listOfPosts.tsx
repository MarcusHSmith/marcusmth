import React from "react"

import { Segment } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
import Layout from "./layout";
import SEO from "./seo";
import Bio from "./bio";
import { rhythm } from "../utils/typography";
import { Link } from "gatsby";
import MailChimpForm from "./mailChimpForm";

const ListOfPosts = (props: { data: any, posts: any, location: any }) => {
    return (
    <>
    <Layout 
        location={props.location} 
        title={"Marcusmth"}
    >
        <SEO title="Marcus Smith Software Engineering iOS Blog" />
        <Bio />
        {props.posts
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Segment>
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
      </Layout>
      </>
    )
}

export default ListOfPosts