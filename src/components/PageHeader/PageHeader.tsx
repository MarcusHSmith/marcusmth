import React, { ReactElement } from "react"

import Bio from "../bio"

export default function PageHeader({isFull = true}: {isFull?: boolean}): ReactElement {
    return (
      <div className="py-4"><Bio isFull={isFull}/></div>
    )
}
