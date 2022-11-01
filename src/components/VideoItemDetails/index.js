import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Sidebar from '../Sidebar'
import Header from '../Header'
import VideoCard from '../VideoCard'

import {LoadingElement, VideoItemContainer} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiConstants.initial, videoItemDetails: []}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormattedVideoData = data => ({
    channel: data.channel,
    description: data.description,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    videoUrl: data.video_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const updatedVideoCardDetails = this.getFormattedVideoData(
        data.video_details,
      )
      this.setState({
        apiStatus: apiConstants.success,
        videoItemDetails: updatedVideoCardDetails,
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
              <Loader type="ThreeDots" color={isDarkMode ? 'white' : 'black'} />
            </LoadingElement>
          )

          const renderSuccessView = () => {
            const {videoItemDetails} = this.state

            return (
              <div>
                <VideoCard videoItemDetails={videoItemDetails} />
              </div>
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
              case apiConstants.inProgress:
                return renderLoader()
              case apiConstants.failure:
                return renderFailureView()
              default:
                return null
            }
          }

          return (
            <div>
              <Header />
              <VideoItemContainer
                isDarkMode={isDarkMode}
                data-testid="videoItemDetails"
              >
                <Sidebar />
                {getResult()}
              </VideoItemContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
