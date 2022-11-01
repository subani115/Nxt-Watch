import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  ThumbnailImage,
  VideoListItem,
  ChannelContainer,
  DetailsContainer,
  VideoItemHeading,
  PublishedDataCountsContainer,
  ChannelText,
} from './styledComponents'

const GamingItem = props => {
  const {gamingItem} = props
  const {thumbnailUrl, id, title, viewCount} = gamingItem
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link-element">
            <VideoListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <>
                <ChannelContainer isDarkMode={isDarkMode}>
                  <DetailsContainer>
                    {' '}
                    <VideoItemHeading isDarkMode={isDarkMode}>
                      {title}
                    </VideoItemHeading>
                    <PublishedDataCountsContainer>
                      <ChannelText isDarkMode={isDarkMode}>
                        {viewCount}
                      </ChannelText>
                    </PublishedDataCountsContainer>
                  </DetailsContainer>
                </ChannelContainer>
              </>
            </VideoListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingItem
