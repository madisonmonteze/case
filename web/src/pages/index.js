import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BlockContent from "@sanity/block-content-to-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useSite from '../hooks/use-site'

const HomepageStyles = styled.div`

`;

const LandingSectionStyles = styled.div`

`;

const WhatSectionStyles = styled.div`

`;

const WhoSectionStyles = styled.div`

`;

const ContactSectionStyles = styled.div`

`;

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
      highlight1 {
        _key
        _type
        children {
          _key
          _type
          marks
          text
        }
      }
      highlight2 {
        _key
        _type
        children {
          _key
          _type
          marks
          text
        }
      }
      highlight3 {
        _key
        _type
        children {
          _key
          _type
          marks
          text
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
  console.log(data)

  // main section
  const homeData = data.sanityHome
  const homeLogo = homeData.logo

  // what section
  const whatData = data.sanityWhatWeDo

  // who section
  const whoData = data.sanityWhoAreWe

  // contact section
  const contactData = data.sanityGetInTouch

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <HomepageStyles>
        <LandingSectionStyles>
          <img src={homeLogo.asset.url} alt={homeLogo.alt} />
          <h2>{homeData.title}</h2>
          <button>{homeData.anchorLinkText}</button>
        </LandingSectionStyles>

        <WhatSectionStyles>
          <div>
            <h1>{whatData.title}</h1>
            <p>{whatData.subtitle}</p>
          </div>
          <div>
            <BlockContent blocks={whatData.text} />

            {/* TODO: render highlight blocks as block text */}

            <h3>{whatData.impactsSubheading}</h3>

            {whatData.impactsList.map(item => (
              <div>
                <h4>{item.listTitle}</h4>
                <p>{item.listBodyCopy}</p>
              </div>
            ))}
          </div>
        </WhatSectionStyles>

        <WhoSectionStyles>
          <div>
            <h1>{whoData.title}</h1>
            <img src={whoData.sideImage.asset.url} alt={whoData.sideImage.alt} />
          </div>

          <div>
            <BlockContent blocks={whoData.text} />

            <h3>{whoData.membersSubheading}</h3>
            {whoData.membersList.map(item => (
              <div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </WhoSectionStyles>

        <ContactSectionStyles>
          <div>
            <h1>{contactData.title}</h1>
          </div>
          <div>
            <h3>{contactData.body.heading}</h3>
            <p>{contactData.body.paragraph}</p>
            <a href={contactData.body.button.url} target="_blank">
              {contactData.body.button.text}
            </a>

            <h3>{contactData.socialHeading}</h3>
            <p>{contactData.socialSubheading}</p>
            {contactData.socialLinks.map(item => (
              <div>
                <a href={item.url} >{item.text}</a>
              </div>
            ))}
          </div>
        </ContactSectionStyles>

      </HomepageStyles>
    </Layout>
  )
}

export default IndexPage
