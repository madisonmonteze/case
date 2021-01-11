import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import useSite from '../hooks/use-site'

export const query = graphql`
  {
    sanityHome {
      title
      anchorLinkText
      logo {
        asset {
          _id
          url
        }
        alt
      }
    }
    sanityWhatWeDo {
      title
      subtitle
      text {
        _key
        _type
        children {
          _key
          _type
          marks
          text
        }
      }
      highlights {
        highlight1 {
          _key
          children {
            _key
            _type
            marks
            text
          }
        }
        highlight2 {
          _key
          children {
            _key
            _type
            marks
            text
          }
        }
        highlight3 {
          _key
          children {
            _key
            _type
            marks
            text
          }
        }
      }
      impactsSubheading
      impactsList {
        _key
        listTitle
        listBodyCopy
      }
    }
    sanityWhoAreWe {
      title
      sideImage {
        alt
        asset {
          url
        }
      }
      text {
        children {
          _key
          _type
          marks
          text
        }
        _key
        _type
      }
      membersSubheading
      membersList
    }
    sanityGetInTouch {
      title
      body {
        heading
        paragraph
        button {
          text
          url
        }
      }
      socialHeading
      socialSubheading
      socialLinks {
        text
        url
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const site = useSite()

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export default IndexPage
