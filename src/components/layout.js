import React from "react"

import { PageHeader } from "./page-header/page-header"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <PageHeader {...this.props} />
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
