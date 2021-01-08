import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import useNavigation from '../hooks/use-navigation'

const Header = () => {
  const navigation = useNavigation()

  return (
    <pre>{JSON.stringify(navigation, null, 4)}</pre>
  )
}

export default Header
