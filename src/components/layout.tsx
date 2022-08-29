import React, { ReactElement, ReactNode } from "react"

import { rhythm } from "../utils/typography"
import PageHeader from "./PageHeader/PageHeader"

export default function Layout({children, isFullHeader = true}: {children: ReactNode, isFullHeader?: boolean}): ReactElement {
  return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
        }}
      >
        <PageHeader isFull={isFullHeader}/>
        <main>{children}</main>
      </div>
  )
}
