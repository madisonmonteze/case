import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { urlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers'

const SEO = ({ title, description, url, keywords, image }) => {
  const { pathname } = useLocation()

  const siteTitle = title || ''
  const siteDescription = description || ''
  const siteUrl = `${url}${pathname}` || ''
  const siteKeywords = keywords && keywords.length > 0 ? keywords.join(', ') : []
  const metaImage =
    image && image.asset ? urlFor(buildImageObj(image)).width(1200).height(630).url() : ''

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={siteKeywords} />}
      {image && <meta name="image" content={metaImage} />}

      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      {image && <meta property="og:image" content={metaImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      {image && <meta name="twitter:image" content={metaImage} />}
    </Helmet>
  )
}

export default SEO