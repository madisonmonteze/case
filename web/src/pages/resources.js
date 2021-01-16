import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import useSite from '../hooks/use-site'

const ResourcesStyles = styled.div`

`;

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
  
  const resourcesData = data.sanityResources

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <ResourcesStyles>
        <h2>{resourcesData.title}</h2>
        <p>{resourcesData.body}</p>

        <h3>{resourcesData.guidesSubtitle}</h3>
        {resourcesData.guidesLinks.map(item => (
          <div>
            <a href={item.url} >{item.text}</a>
          </div>
        ))}

        <h3>{resourcesData.socialSubtitle}</h3>
        {resourcesData.socialLinks.map(item => (
          <div>
            <a href={item.url} >{item.text}</a>
          </div>
        ))}
      </ResourcesStyles>
    </Layout>
  )
}

export default ResourcePage
