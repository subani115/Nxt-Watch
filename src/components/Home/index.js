import {Component} from 'react'

import Header from '../Header'
import {HomeContainer} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import AllVideos from '../AllVideos'

class Home extends Component {
  render() {
    return (
      <ThemeContext>
        {value => {
          const {isDarkMode} = value

          return (
            <HomeContainer isDarkMode={isDarkMode} data-testid="home">
              <Header />
              <AllVideos />
            </HomeContainer>
          )
        }}
      </ThemeContext>
    )
  }
}

export default Home
