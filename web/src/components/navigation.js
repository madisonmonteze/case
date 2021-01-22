import React, { useState } from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import useNavigation from '../hooks/use-navigation'
import { useMatch } from '@reach/router';

const NavigationStyles = styled.div`
  height: 90px;
  transition: background-color .5s ease;

  &[data-active='true'] {
    transition: all .5s ease;
    height: 72px;
    .case-logo,
    .hamburger-menu {
      opacity: 0;
    }
    @media (min-width: 1024px) {
      height: 100%;
      .case-logo,
      .hamburger-menu {
        opacity: 1;
      }
    }
  }

  &.active {
    background-color: var(--red);
    .hamburger-menu {
      svg {
        opacity: 0;
        transition: opacity .3s ease;
      }
      span {
        &:nth-of-type(1) {
          transform: rotate(45deg) translateY(15px);
          @media (min-width: 1024px) {
            transform: scale(0);
          }
        }
        &:nth-of-type(2) {
          transform: scale(0);
          
        }
        &:nth-of-type(3) {
          transform: rotate(-45deg) translateY(-15px);
          @media (min-width: 1024px) {
            transform: scale(0);
          }
        }
      }
    }

  }

  @media (min-width: 1024px) {
    width: 150px;
    height: 100%;
    &.active {
      .case-logo svg {
        width: 65px;
        height: 65px;
      }
    }
  }

  .case-logo {
    svg {
      fill: var(--white);
      z-index: 100;
      transition: all .5s ease;
      width: 50px;
      height: 50px;
      @media (min-width: 1024px) {
        width: 88px;
        height: 88px;
      }
    }
  }

  .hamburger-menu {
    span {
      width: 28px;
      height: 3px;
      margin: 0 auto 8px;
      background-color: var(--white);
      display: block;
      transform-origin: center;
      transition: transform .4s cubic-bezier(0,0,.25,1),-webkit-transform .4s cubic-bezier(0,0,.25,1);
    }
    svg {
      stroke: var(--white);
      transition: opacity .3s ease;
    }
  }
`;

const MenuStyles = styled.aside`
  transition: transform .8s cubic-bezier(0.77,0.2,0.05,1.0);
  &.closed {
    transform: translateX(-100%);
    transition: transform .8s cubic-bezier(0.77,0.2,0.05,1.0);

    .close-btn svg {
      opacity: 0;
    }
  }

  .menu-item {
    background-color: var(--blue);
    &:nth-child(2) {
      background-color: var(--red);
    }
  }

  .close-btn svg {
    display: none;
    transition: all .5s ease;
    @media (min-width: 1024px) {
      display: block;
      width: 48px;
      height: 48px;
    }
  }
`;

const Navigation = () => {
  const navigation = useNavigation()

  // active url
  const isIndex = useMatch('/')
  const isResources = useMatch('/resources')

  // open and close nav
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  // scroll effects
  
  // TESTING
  
  // const [scrollTop, setScrollTop] = useState(0);
  // const [greenNav, setGreenNav] = useState(false);

  // const onScroll = () => {
  //   const winScroll = document.documentElement.scrollTop;
  //   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //   const scrolled = (winScroll / height) * 100;
  //   setScrollTop(scrolled)

  //   if (scrolled > 15) {
  //     setGreenNav(!greenNav)
  //   } else {
  //     setGreenNav(false)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('scroll', onScroll);

  //   return () => {
  //     document.removeEventListener('scroll', onScroll);
  //   };
  // }, []);

  // end scroll effects 

  return (
    <>
      <MenuStyles className={`fixed w-full h-full flex flex-col lg:flex-row ${isActive ? "" : "closed"}`}>
        <button onClick={toggleClass} className="close-btn fixed top-0 right-0 p-8 focus:outline-none z-50">
          <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="48.8409" y1="1.06066" x2="2.06054" y2="47.8411" stroke="white" stroke-width="3"/>
            <line x1="48.3739" y1="47.8409" x2="1.59351" y2="1.06054" stroke="white" stroke-width="3"/>
          </svg>
        </button>
        {navigation.navLinks.map(item => (
          <div className={`${isIndex ? "active-link" : ""} menu-item w-full h-1/2 lg:h-full lg:w-1/2 text-5xl lg:text-6xl text-white flex justify-center items-center`}>
            <Link to={item.slug} >{item.text}</Link>
          </div>
        ))}
      </MenuStyles>
      
      <NavigationStyles id="nav" className={`navbar h-auto w-full lg:w-auto lg:h-full fixed top-0 flex flex-row lg:flex-col items-center justify-between p-8 ${isActive ? "active" : ""} ${isResources ? "bg-blue" : "bg-red"}`}>
        <div className="case-logo">
          <svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.9507 12.5273H62.2237L67.7364 26.5455H56.438L61.9507 12.5273ZM49.8335 43.4759L53.4408 34.2653H70.7336L74.4105 43.4759H85.436L68.1432 0.814453H56.6361L39.4824 43.4759H49.8335Z"/>
            <path d="M26.825 60.7898L18.7914 59.3683C15.6604 58.7613 13.755 57.8775 13.755 55.4391C13.755 52.5269 16.2063 50.7646 20.5629 50.7646C25.5351 50.7646 29.0033 53.203 29.2762 58.213L38.8084 57.9414C38.6532 50.6528 34.8692 45.5684 27.8419 43.6038C36.9138 41.4529 41.8645 34.3453 42.4853 25.4542L32.616 25.0496C32.0005 30.4694 28.8695 35.2078 21.7244 35.2078C14.8469 35.2078 10.6294 30.1287 10.6294 22.1373C10.6294 14.146 14.8522 9.06683 21.7244 9.06683C28.8695 9.06683 32.0058 13.8052 32.616 19.2251L42.4853 18.8205C41.7307 8.12447 34.7194 0 21.7832 0C9.39302 0 0 9.00826 0 22.1426C0 32.7321 6.10145 40.6277 14.9539 43.3004C7.87301 44.8816 3.60735 49.5721 3.60735 56.3229C3.60735 63.5689 8.44034 67.3596 15.2483 68.6481L23.2818 70.0696C27.0283 70.8149 29.5438 71.4911 29.5438 74.3341C29.5438 77.1772 26.6858 78.9394 22.1258 78.9394C16.8164 78.9394 12.3902 76.5702 11.9835 70.6765L2.52086 71.0173C2.52086 81.3778 10.6882 87 22.1258 87C31.9309 87 39.6219 82.4639 39.6219 73.658C39.6219 66.6835 35.6025 62.3497 26.825 60.7898Z" />
            <path d="M56.7068 68.7173H74.0691V60.3851H56.7068V51.9891H79.0359V43.5239H46.5645V86.1854H79.6514V77.7202H56.7068V68.7173Z" />
            <path d="M86.7847 84.4285C86.2709 84.9449 85.6447 85.2058 84.9114 85.2058C84.1782 85.2058 83.552 84.9449 83.0382 84.4285C82.5297 83.9121 82.2728 83.2838 82.2728 82.5491C82.2728 81.8197 82.5297 81.1968 83.0435 80.6804C83.5573 80.1639 84.1782 79.9031 84.9114 79.9031C85.6447 79.9031 86.2655 80.1639 86.7793 80.6804C87.2931 81.1968 87.5447 81.8197 87.5447 82.5491C87.55 83.2838 87.2931 83.9121 86.7847 84.4285ZM87.0951 80.3822C86.4957 79.7859 85.7678 79.4878 84.9114 79.4878C84.0551 79.4878 83.3325 79.7859 82.7278 80.3822C82.1283 80.9785 81.8232 81.7026 81.8232 82.5491C81.8232 83.401 82.123 84.125 82.7278 84.7266C83.3325 85.3283 84.0551 85.6317 84.9114 85.6317C85.7624 85.6317 86.4903 85.3283 87.0951 84.7266C87.6945 84.125 87.9996 83.401 87.9996 82.5491C87.9996 81.7026 87.6999 80.9785 87.0951 80.3822Z" />
            <path d="M85.5964 83.6723C85.4412 83.7947 85.2485 83.8533 85.0237 83.8533C84.6652 83.8533 84.3922 83.7255 84.2049 83.4646C84.0175 83.2037 83.9212 82.8843 83.9212 82.501C83.9212 82.2348 83.9801 81.9845 84.0978 81.7556C84.2798 81.3936 84.5742 81.2126 84.9756 81.2126C85.2646 81.2126 85.484 81.2871 85.6339 81.4415C85.7838 81.5959 85.8747 81.7769 85.8962 81.9845H86.4046C86.3671 81.4841 86.1423 81.1274 85.7249 80.9144C85.484 80.7973 85.2164 80.7334 84.9167 80.7334C84.4404 80.7334 84.055 80.9038 83.7606 81.2498C83.4663 81.5906 83.3164 82.0165 83.3164 82.5276C83.3164 83.0706 83.4823 83.5125 83.8088 83.8373C84.1353 84.1674 84.5313 84.3271 84.9916 84.3271C85.3556 84.3271 85.6714 84.226 85.9336 84.0183C86.1959 83.8107 86.3618 83.5179 86.426 83.1452H85.9176C85.8587 83.3741 85.7516 83.5498 85.5964 83.6723Z" />
          </svg>
        </div>
        
        <button onClick={toggleClass} className="hamburger-menu focus:outline-none">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </NavigationStyles>
    </>
  )
}

export default Navigation
