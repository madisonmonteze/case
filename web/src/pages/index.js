import React, { useState } from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BlockContent from "@sanity/block-content-to-react"
import { InView } from 'react-intersection-observer';
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSite from '../hooks/use-site'

import RightArrow from '../assets/images/right-arrow.svg'

const HomepageStyles = styled.div`
  p {
    font-size: 16px;
    line-height: 20px;

    @media (min-width: 1024px) {
      font-size: 19px;
      line-height: 25px;
    }
  }
`;

const LandingSectionStyles = styled.div`
  svg {
    height: 10px;
    width: auto;
    margin-right: .5rem;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 96px);

    img {
      width: 400px;
      height: auto;
    }

    svg {
      height: 14px;
      width: auto;
    }
  }
`;

const WhatSectionStyles = styled.div`
  svg {
    height: 10px;
    width: auto;
    margin-right: .5rem;
  }

  .highlight-item {
    background-color: rgba(5, 71, 6, 0.1);
    border: 1px solid var(--brightGreen);

    p {
      line-height: 18.4px;
    }
  }

  .impacts-item {
    &::before {
      content: '';
      display: inline-flex;
      height: 12px;
      width: 12px;
      background-image: url(${RightArrow});
      background-size: 12px 12px;
      margin-left: -1rem;
      padding-right: 1rem;
    }
  }
`;

const WhoSectionStyles = styled.div`
  .member-item {
    &::before {
      content: '';
      display: inline-flex;
      height: 12px;
      width: 12px;
      background-image: url(${RightArrow});
      background-size: 12px 12px;
      margin-left: -1rem;
      padding-right: 1rem;
    }
  }
`;

const ContactSectionStyles = styled.div`
  .social-item {
    svg {
      width: 10px;
    }
  }
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
      highlights
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
      firstTextBlock {
        children {
          _key
          _type
          marks
          text
        }
        _key
        _type
      }
      blockquote
      secondTextBlock {
        children {
          _key
          _type
          text
          marks
        }
        _key
        _type
      }
      membersSubheading
      membersList {
        text
        url
      }
    }
    sanityGetInTouch {
      title
      body {
        heading
        subheading
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
      <InView as="div" onChange={(inView) => inView}>
        <LandingSectionStyles id="landingSection" className="pb-12 lg:flex lg:flex-col lg:justify-between">
          <img className="w-3/4 pb-24 pt-8 lg:p-0" src={homeLogo.asset.url} alt={homeLogo.alt} />
          <div>
            <h2 className="text-2xl lg:text-3xl pb-4 lg:pb-16 lg:w-3/4">{homeData.title}</h2>
            <p className="inline-flex items-center text-base lg:text-lg-2">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4512 6.3125L7.31184 12.4518L1.17251 6.3125" stroke="black" stroke-width="2"/>
              </svg>
              {homeData.anchorLinkText}
            </p>
          </div>
        
        </LandingSectionStyles>
      </InView>

      <InView as="div" onChange={(inView) => console.log('What Section Inview:', inView)}>
        <WhatSectionStyles id="whatSection" className="py-12">
          <div className="pb-12 flex flex-col lg:flex-row justify-between w-full">
            <h1 className="text-3xl-2 lg:text-4xl text-green pb-4 w-full lg:w-1/3">{whatData.title}</h1>
            <div className="w-full lg:w-1/2">
              <BlockContent blocks={whatData.text} /> 
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full">
            <h3 className="text-lg-2 font-semibold text-green pb-4 w-full lg:w-1/3">{whatData.subtitle}</h3>
            <div className="w-full lg:w-1/2">
              <div className="pb-4">
                {whatData.highlights.map(item => (
                  <div className="highlight-item p-4 mb-6">
                    <p className="text-base lg:text-lg-2">{item}</p>
                  </div>
                ))}
              </div>


              <h3 className="text-lg-2 font-semibold text-green pb-4">{whatData.impactsSubheading}</h3>

              {whatData.impactsList.map(item => (
                <div className="impacts-item pl-4 pb-4">
                  <h4 className="text-base lg:text-lg-2 inline-flex items-center font-semibold pb-2">
                    {item.listTitle}
                  </h4>
                  <p>{item.listBodyCopy}</p>
                </div>
              ))}
            </div>
          </div>
        </WhatSectionStyles>
      </InView>
      
      <InView as="div" onChange={(inView) => console.log('Who Section Inview:', inView)}>
        <WhoSectionStyles id="whoSection" className="py-12">
          <div className="w-full flex flex-col lg:flex-row justify-between">
            <h1 className="text-3xl-2 lg:text-4xl text-yellow pb-4 w-full lg:w-1/3">{whoData.title}</h1>
            <div className="pb-8 w-full lg:w-1/2">
              <BlockContent blocks={whoData.firstTextBlock} />
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-start">
            <img className="pb-8 w-full lg:w-1/3 h-auto object-contain lg:-mt-20" src={whoData.sideImage.asset.url} alt={whoData.sideImage.alt} />
            
            <div className="w-full lg:w-1/2">
              <h4 className="text-2xl lg:text-xl-2 text-yellow pb-8">{whoData.blockquote}</h4>
              
              <BlockContent blocks={whoData.secondTextBlock} />
              
              <div className="pt-8">
                <h3 className="text-lg-2 font-semibold text-yellow pb-4">{whoData.membersSubheading}</h3>
                <div className="flex flex-row flex-wrap">
                  {whoData.membersList.map(item => (
                    <a href={item.url} className="member-item font-semibold w-1/2 pl-4 lg:pl-6 pb-4 text-base lg:text-lg">{item.text}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </WhoSectionStyles>
      </InView>

      <InView as="div" onChange={(inView) => console.log('Contact Section Inview:', inView)}>
        <ContactSectionStyles id="contactSection" className="py-12 lg:pb-24">
          <div className="w-full flex flex-col lg:flex-row justify-between">
            <h1 className="text-3xl-2 lg:text-4xl text-blue pb-4 w-full lg:w-1/3">{contactData.title}</h1>
            <div className="w-full lg:w-1/2">
              <div className="pb-4 flex flex-col lg:flex-row lg:items-center">
                <h3 className="text-base lg:text-lg-2 font-semibold text-blue lg:mr-2">{contactData.body.heading}</h3>
                <h3 className="text-base lg:text-lg font-reg text-blue">{contactData.body.subheading}</h3>
              </div>
              
              <p className="pb-12">{contactData.body.paragraph}</p>

              <a className="text-lg-2 text-white bg-darkBlue rounded-xl p-6" href={contactData.body.button.url} target="_blank">
                {contactData.body.button.text}
              </a>

              <h3 className="pt-20 text-base lg:text-lg-2 font-semibold text-blue">{contactData.socialHeading}</h3>
              <p className="py-2">{contactData.socialSubheading}</p>
              {contactData.socialLinks.map(item => (
                <div className="social-item inline-flex items-center mr-6">
                  <a className="font-semibold lg:text-lg-2 pr-2" href={item.url} >{item.text}</a>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2H13V14" stroke="black" stroke-width="2"/>
                    <path d="M1 14.0313L13 2.0312" stroke="black" stroke-width="2"/>
                  </svg>

                </div>
              ))}
            </div>
          </div>
        </ContactSectionStyles>
      </InView>
      </HomepageStyles>
    </Layout>
  )
}

export default IndexPage
