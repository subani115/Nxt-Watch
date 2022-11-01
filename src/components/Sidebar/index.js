import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {RiPlayListAddLine} from 'react-icons/ri'

import {Link} from 'react-router-dom'
import {
  SidebarMainContainer,
  SidebarListContainer,
  SidebarListElement,
  SidebarHeading,
  SidebarBottomContainer,
  BottomImage,
  BottomImageContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <SidebarMainContainer isDarkMode={isDarkMode}>
          {/* list container side bar containing home,trending,gaming,saved */}
          <SidebarListContainer>
            {/* home icon */}
            <Link to="/" className="link-element">
              <SidebarListElement>
                <AiFillHome
                  size={20}
                  color={isDarkMode ? 'white' : '#181818'}
                />
                <SidebarHeading isDarkMode={isDarkMode}>Home</SidebarHeading>
              </SidebarListElement>
            </Link>
            {/* trending icon */}
            <Link to="/trending" className="link-element">
              <SidebarListElement>
                <HiFire size={20} color={isDarkMode ? 'white' : '#181818'} />
                <SidebarHeading isDarkMode={isDarkMode}>
                  Trending
                </SidebarHeading>
              </SidebarListElement>
            </Link>
            {/* gaming icon */}
            <Link to="/gaming" className="link-element">
              <SidebarListElement>
                <SiYoutubegaming
                  size={20}
                  color={isDarkMode ? 'white' : '#181818'}
                />
                <SidebarHeading isDarkMode={isDarkMode}>Gaming</SidebarHeading>
              </SidebarListElement>
            </Link>
            {/* saved videos */}
            <Link to="/saved-videos" className="link-element">
              <SidebarListElement>
                <RiPlayListAddLine
                  size={20}
                  color={isDarkMode ? 'white' : '#181818'}
                />
                <SidebarHeading isDarkMode={isDarkMode}>
                  Saved Videos
                </SidebarHeading>
              </SidebarListElement>
            </Link>
          </SidebarListContainer>
          <SidebarBottomContainer>
            <SidebarHeading isDarkMode={isDarkMode}>CONTACT US</SidebarHeading>
            <BottomImageContainer>
              <BottomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <BottomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <BottomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </BottomImageContainer>
            <SidebarHeading isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </SidebarHeading>
          </SidebarBottomContainer>
        </SidebarMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Sidebar
