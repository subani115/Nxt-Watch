import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {RiPlayListAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  HeaderContainer,
  HeaderImageElement,
  HeaderLogoImg,
  RightHeaderElements,
  HeaderButtonElement,
  HeaderLogoutButton,
  HeaderLogoutText,
  HeaderBurgerElement,
  SidebarListContainer,
  SidebarListElement,
  SidebarHeading,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }

      const logoutButton = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const logoImage = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const themeIcon = isDarkMode ? <FiSun size={25} /> : <FaMoon size={25} />
      return (
        <HeaderContainer isDarkMode={isDarkMode}>
          <Link to="/">
            <HeaderLogoImg src={logoImage} alt="website logo" />
          </Link>
          <RightHeaderElements>
            <HeaderButtonElement
              type="button"
              isDarkMode={isDarkMode}
              onClick={changeTheme}
              data-testid="theme"
            >
              {themeIcon}
            </HeaderButtonElement>

            {/* Hamburger icon in medium and small devices to open menu bar */}

            <Popup
              modal
              trigger={
                <HeaderBurgerElement type="button" isDarkMode={isDarkMode}>
                  <GiHamburgerMenu size={25} />
                </HeaderBurgerElement>
              }
            >
              {close => (
                <div
                  className={
                    isDarkMode
                      ? 'content-container-dark'
                      : 'content-container-white'
                  }
                >
                  <button type="button" className="close" onClick={close}>
                    &times;
                  </button>
                  <SidebarListContainer>
                    {/* home icon */}
                    <Link to="/" className="link-element">
                      <SidebarListElement>
                        <AiFillHome
                          size={20}
                          color={isDarkMode ? 'white' : '#181818'}
                        />
                        <SidebarHeading isDarkMode={isDarkMode}>
                          Home
                        </SidebarHeading>
                      </SidebarListElement>
                    </Link>
                    {/* trending icon */}
                    <Link to="/trending" className="link-element">
                      <SidebarListElement>
                        <HiFire
                          size={20}
                          color={isDarkMode ? 'white' : '#181818'}
                        />
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
                        <SidebarHeading isDarkMode={isDarkMode}>
                          Gaming
                        </SidebarHeading>
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
                </div>
              )}
            </Popup>

            <HeaderImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            {/* Popup display for logout icon in mobile and desktop sites */}
            <Popup
              modal
              trigger={
                <HeaderLogoutButton
                  type="button"
                  // onClick={logoutButton}
                  isDarkMode={isDarkMode}
                >
                  <FiLogOut size={25} />
                </HeaderLogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <div
                  className={
                    isDarkMode
                      ? 'content-container-dark'
                      : 'content-container-white'
                  }
                >
                  <button type="button" className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="content">
                    <SidebarHeading isDarkMode={isDarkMode}>
                      Are you sure to logout
                    </SidebarHeading>
                  </div>
                  <div className="actions">
                    <button
                      className="button"
                      type="button"
                      onClick={() => {
                        console.log('modal closed ')
                        close()
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="button"
                      type="button"
                      onClick={logoutButton}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <HeaderLogoutText
                  type="button"
                  // onClick={logoutButton}
                  isDarkMode={isDarkMode}
                >
                  Logout
                </HeaderLogoutText>
              }
              className="popup-content"
            >
              {close => (
                <div
                  className={
                    isDarkMode
                      ? 'content-container-dark'
                      : 'content-container-white'
                  }
                >
                  <button type="button" className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="content">
                    <h1>Are you sure to logout</h1>
                  </div>
                  <div className="actions">
                    <button
                      className="button"
                      type="button"
                      onClick={() => {
                        console.log('modal closed ')
                        close()
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="button"
                      type="button"
                      onClick={logoutButton}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </RightHeaderElements>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
