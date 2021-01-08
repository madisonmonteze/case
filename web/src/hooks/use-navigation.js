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

  // _key will be used to map over the navItems array
  // <ul>
  //  {navigation.navItems.map(item => (
  //    <li key={item._key}>
  //      <Link to={item.path}>{item.title}</Link>
  //    </li>
  //  ))}
  // </ul>

  const { navigation } = data || {}
  return navigation
}

export default useNavigation