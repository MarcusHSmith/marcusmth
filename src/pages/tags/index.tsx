import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Bio from "../../components/bio"
import { Label, Segment } from "semantic-ui-react"
import SEO from "../../components/seo"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
<Layout isFullHeader={true}>
<SEO 
  title="Marcus Smith Tags"
  description="Tags for marcusmth"
  />
        <Segment>
            <div 
                style={{
                display: `flex`, flexWrap: 'wrap'
            }}>
                {group.sort((a, b) => b.totalCount - a.totalCount)
                .map(tag => (
                    <Link style={{ boxShadow: `none`, paddingBottom: 8, paddingRight: 8 }} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        <Label color='blue' size='small'>{kebabCase(tag.fieldValue)} ({tag.totalCount})</Label>
                    </Link>
         )
        )}
        </div>
       </Segment>
</Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`