import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundPage,
  NotFoundImage,
  NotFoundPara,
  NotFoundHeading,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode} = value

      const notFoundImg = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div>
          <Header isDarkMode={isDarkMode} />
          <NotFoundContainer isDarkMode={isDarkMode} data-testid="notFound">
            <Sidebar isDarkMode={isDarkMode} />
            <NotFoundPage isDarkMode={isDarkMode}>
              <NotFoundImage src={notFoundImg} alt="not found" />
              <NotFoundHeading>Page Not Found</NotFoundHeading>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundPage>
          </NotFoundContainer>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
