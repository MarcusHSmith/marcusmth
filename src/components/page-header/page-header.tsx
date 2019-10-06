import React from "react"
import { Link } from "gatsby"

import * as styles from "./page-header.module.css"

export interface IProps {
  title: string
}

export class PageHeader extends React.Component<IProps> {
  render() {
    const { title } = this.props
    return (
      <div>
        <h3 className={styles.header}>
          <Link className={styles.title} to={`/`}>
            {title}
          </Link>
        </h3>
      </div>
    )
  }
}
