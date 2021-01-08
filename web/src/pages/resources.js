import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import useSite from '../hooks/use-site'

export const query = graphql`
  {
    sanityResources {
      title
      body
      guidesSubtitle
      guidesLinks {
        _key
        text
        url
      }
      socialSubtitle
      socialLinks {
        _key
        text
        url
      }
    }
  }
`

const ResourcePage = ({ data }) => {
  const site = useSite()
  console.log(site.title)

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export default ResourcePage
