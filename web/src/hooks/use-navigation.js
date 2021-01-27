import { graphql, useStaticQuery } from 'gatsby'

const useNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      navigation: sanityNavigation {
        navLinks {
          _key
          text
          slug
        }
      }
    }
  `)

  const { navigation } = data || {}
  return navigation
}

export default useNavigation