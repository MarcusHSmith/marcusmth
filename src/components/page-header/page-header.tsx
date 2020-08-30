import React from "react"
import { Link } from "gatsby"

import * as styles from "./page-header.module.css"
import { Header } from "semantic-ui-react"

export interface IProps {
  title: string
}

export class PageHeader extends React.Component<IProps> {
  render() {
    const { title } = this.props
    return (
      <div>
        <Header className={styles.header}>
          <Link className={styles.title} to={`/`}>
            {title}
          </Link>
        </Header>
      </div>
    )
  }
}
