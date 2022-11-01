import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import {ThumbnailImage, SavedVideoListItem} from './styledComponents'

const SavedList = props => {
  const {savedListItem} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt} = savedListItem
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <SavedVideoListItem>
            <div>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            </div>
            <div>
              <p color={isDarkMode ? '#f9f9f9' : '#0f0f0f'}>{title}</p>
              <p>{channel.name}</p>
              <p>{viewCount} Views</p>
              <p>
                .
                {formatDistanceToNow(new Date(publishedAt), {addPrefix: false})}{' '}
                ago
              </p>
            </div>
          </SavedVideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default SavedList
