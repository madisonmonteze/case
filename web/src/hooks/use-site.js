import { graphql, useStaticQuery } from 'gatsby'

const useSite = () => {
  const data = useStaticQuery(graphql`
    query {
      site: sanitySite {
        title
        description
        url
        keywords
        image {
          asset {
            _id
            url
          }
        }
      }
    }
  `)

  const { site } = data || {}
  return site
}

export default useSite