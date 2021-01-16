import React from "react"
import styled from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import Typography from '../styles/typography'
import Navigation from './navigation'


const LayoutStyles = styled.div`
  height: 100vh;

  main {
    margin-left: 150px;
  }
`;

const Layout = ({ children, location }) => (
  <>
    <GlobalStyles />
      <Typography />
        <LayoutStyles className="h-full w-full flex font-reg">
          <Navigation />
            <main>
              {children}
            </main>
        </LayoutStyles>
  </>
)

export default Layout
