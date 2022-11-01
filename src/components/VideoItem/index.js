import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import './index.css'

import ThemeContext from '../../context/ThemeContext'
import {
  ThumbnailImage,
  VideoListItem,
  VideoItemHeading,
  ProfileImage,
  ChannelText,
  ChannelContainer,
  DetailsContainer,
  PublishedDataCountsContainer,
} from './styledComponents'

const VideoItem = props => {
  const {videoItemDetails} = props
  const {
    channel,
    publishedAt,
    id,
    thumbnailUrl,
    title,
    viewCount,
  } = videoItemDetails

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
                  <ProfileImage
                    src={channel.profile_image_url}
                    alt="channel logo"
                  />
                  <DetailsContainer>
                    {' '}
                    <VideoItemHeading isDarkMode={isDarkMode}>
                      {title}
                    </VideoItemHeading>
                    <ChannelText isDarkMode={isDarkMode}>
                      {channel.name}
                    </ChannelText>
                    <PublishedDataCountsContainer>
                      <ChannelText isDarkMode={isDarkMode}>
                        {viewCount}
                      </ChannelText>
                      <ChannelText isDarkMode={isDarkMode}>
                        .{formatDistanceToNow(new Date(publishedAt))} ago
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
export default VideoItem
