import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import useSite from '../hooks/use-site'

const ResourcesStyles = styled.div`
  .guides {
    svg {
      height: 24px;
      width: auto;

      @media (min-width: 1024px) {
        height: 44px;
      }
    }
  }

  .socials {
    svg {
      width: 18px;
      height: auto;
      @media (min-width: 1024px) {
        width: 38px;
      }
    }
  }
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
      <ResourcesStyles className="w-full">
        <div className="py-8 lg:pb-16 lg:pt-0 lg:flex lg:flex-row justify-between">
          <h2 className="text-lg-2 font-semibold text-blue pb-6">{resourcesData.title}</h2>
          <p className="text-base lg:text-lg lg:w-1/2">{resourcesData.body}</p>
        </div>

        <div className="pb-8 lg:pb-16 lg:flex lg:flex-row justify-between">
          <h3 className="pb-6 lg:text-lg">{resourcesData.guidesSubtitle}</h3>
          <div className="flex flex-col lg:w-1/2">
            {resourcesData.guidesLinks.map(item => (
              <div className="guides text-2xl-2 lg:text-4xl-2 text-blue pb-4 lg:pb-8 inline-flex items-end ">
                <svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.207 17.5732L14.8327 29.9476L2.45829 17.5732" stroke="#0035E1" stroke-width="2"/>
                  <line x1="15" y1="29" x2="15" y2="-2.22525e-07" stroke="#0035E1" stroke-width="2"/>
                  <line y1="37" x2="30" y2="37" stroke="#0035E1" stroke-width="2"/>
                </svg>

                <a className="ml-4" href={item.url} alt={item.text} target="_blank" rel="noopener noreferrer">{item.text}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex lg:flex-row justify-between">
          <h3 className="pb-6 lg:text-lg">{resourcesData.socialSubtitle}</h3>
          <div className="flex flex-col lg:w-1/2">
            {resourcesData.socialLinks.map(item => (
              <div className="socials text-2xl-2 lg:text-4xl-2 text-blue pb-4 lg:pb-8 inline-flex">
                <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9707 1L33.1128 15.1421L18.9707 29.2843" stroke="#0035E1" stroke-width="2"/>
                  <line x1="33" y1="15" x2="-1.84774e-06" y2="15" stroke="#0035E1" stroke-width="2"/>
                </svg>

                <a className="ml-4" href={item.url} alt={item.text} target="_blank" rel="noopener noreferrer">{item.text}</a>
              </div>
            ))}
          </div>

        </div>

      </ResourcesStyles>
    </Layout>
  )
}

export default ResourcePage
