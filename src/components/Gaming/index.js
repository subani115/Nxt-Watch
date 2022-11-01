import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingItem from '../GamingItem'
import ThemeContext from '../../context/ThemeContext'

import {
  VideosContainer,
  HomePageVideoContainer,
  LoadingElement,
  VideoItemListContainer,
  VideoItemList,
  TrendingVideo,
  Heading,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiConstants.initial,
    allGamingVideos: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const updatedVideosList = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      console.log(updatedVideosList)

      this.setState({
        apiStatus: apiConstants.success,
        allGamingVideos: updatedVideosList,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const renderLoader = () => (
            <LoadingElement data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkMode ? 'white' : 'black'}
                height="50"
                width="50"
              />
            </LoadingElement>
          )

          const renderSuccessView = () => {
            const {allGamingVideos} = this.state
            const videosDisplay = allGamingVideos.length > 0

            return videosDisplay ? (
              <div>
                <VideoItemListContainer isDarkMode={isDarkMode}>
                  {allGamingVideos.map(each => (
                    <VideoItemList key={each.id}>
                      <GamingItem gamingItem={each} key={each.id} />
                    </VideoItemList>
                  ))}
                </VideoItemListContainer>
              </div>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
            )
          }

          const renderFailureView = () => {
            const failureImage = isDarkMode
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            return (
              <div>
                <img src={failureImage} alt="failure view" />
                <h1 className="failure-heading">Oops! Something Went Wrong </h1>
                <p className="failure-desc">
                  We are having some trouble to complete your request. Please
                  try again.
                </p>
                <button
                  type="button"
                  data-testid="button"
                  className="job-item-failure-button"
                  onClick={this.getAllVideos}
                >
                  Retry
                </button>
              </div>
            )
          }

          const getResult = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiConstants.success:
                return renderSuccessView()
              case apiConstants.failure:
                return renderFailureView()
              case apiConstants.inProgress:
                return renderLoader()
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <HomePageVideoContainer data-testid="gaming">
                <Sidebar />
                <VideosContainer isDarkMode={isDarkMode}>
                  <TrendingVideo isDarkMode={isDarkMode}>
                    <SiYoutubegaming size={40} color="red" />
                    <Heading isDarkMode={isDarkMode}>Gaming</Heading>
                  </TrendingVideo>
                  {getResult()}
                </VideosContainer>
              </HomePageVideoContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
