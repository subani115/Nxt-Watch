import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri'

import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  VideosContainer,
  BannerContainer,
  ImageContainer,
  LogoImage,
  HomePageVideoContainer,
  LoadingElement,
  VideoItemListContainer,
  VideoItemList,
  SearchInputElement,
  SearchContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class AllVideos extends Component {
  state = {
    apiStatus: apiConstants.initial,
    searchInput: '',
    allVideosList: [],
    isBannerOpen: true,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiConstants.inProgress})

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: each.channel,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiConstants.success,
        allVideosList: updatedVideosList,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onPressingEnterKey = event => {
    if (event.key === 'Enter') {
      this.getAllVideos()
    }
  }

  render() {
    const {searchInput, isBannerOpen} = this.state
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
            const {allVideosList} = this.state
            const videosDisplay = allVideosList.length > 0

            return videosDisplay ? (
              <div>
                <VideoItemListContainer
                  isDarkMode={isDarkMode}
                  isBannerOpen={isBannerOpen}
                >
                  {allVideosList.map(each => (
                    <VideoItemList>
                      <VideoItem videoItemDetails={each} key={each.id} />
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
              case apiConstants.inProgress:
                return renderLoader()
              case apiConstants.failure:
                return renderFailureView()
              default:
                return null
            }
          }

          const closeBanner = () => {
            this.setState({isBannerOpen: false})
          }

          return (
            <HomePageVideoContainer data-testid="Home">
              <Sidebar />
              <VideosContainer>
                {/* Bannner Element with close button */}
                {isBannerOpen ? (
                  <BannerContainer data-testid="banner">
                    <ImageContainer>
                      <LogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                    </ImageContainer>
                    <button
                      type="button"
                      onClick={closeBanner}
                      data-testid="close"
                    >
                      <RiCloseFill />
                    </button>
                    <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                    <button type="button">GET IT NOW</button>
                  </BannerContainer>
                ) : null}

                <SearchContainer>
                  <SearchInputElement
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.getSearchInput}
                    onKeyDown={this.onPressingEnterKey}
                    isDarkMode={isDarkMode}
                    data-testid="searchButton"
                  />
                  <AiOutlineSearch
                    size={20}
                    width={30}
                    color={isDarkMode ? 'white' : 'black'}
                    background-color={!isDarkMode ? 'white' : 'black'}
                  />
                </SearchContainer>
                {getResult()}
              </VideosContainer>
            </HomePageVideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default AllVideos
