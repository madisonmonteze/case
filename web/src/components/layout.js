import React from "react"
import styled from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import Typography from '../styles/typography'
import Navigation from './navigation'


const LayoutStyles = styled.div`
  height: 100vh;
  main {
    margin-top: 90px;
    max-width: 1440px;
    
    @media (min-width: 1024px) {
      margin-left: 150px;
      margin-top: 0;
    }
  }
`;


const Layout = ({ children }) => (
  <>
    <GlobalStyles />
      <Typography />
      <Navigation />
        <LayoutStyles className="h-full w-full flex flex-col lg:flex-row font-reg">
            <main className="p-6 lg:py-24 lg:px-12 lg:pl-24">
              {children}
            </main>
        </LayoutStyles>
  </>
)

export default Layout
