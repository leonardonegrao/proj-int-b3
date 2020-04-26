import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  return <Helmet title={`${title} | Big Three`} />
}

export default Head
