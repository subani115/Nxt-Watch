import {Link} from 'react-router-dom'
import Sidebar from '../Sidebar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SavedList from '../SavedList'
import {
  SavedVideoContainer,
  SavedPlayListContainer,
  NoSavedVideosImage,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode, savedPlayList} = value

      const renderSavedPlayList = () => {
        const showSavedPlaylist = savedPlayList.length > 0

        return showSavedPlaylist ? (
          <div>
            <h1>Saved Videos</h1>
            {savedPlayList.map(each => (
              <Link to={`/videos/${each.id}`}>
                <SavedList savedListItem={each} key={each.id} />
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <NoSavedVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt="no saved videos"
            />
            <h1>No saved videos found</h1>
            <p>You can save your videos while watching them</p>
          </div>
        )
      }

      return (
        <div>
          <Header />
          <SavedVideoContainer
            isDarkMode={isDarkMode}
            data-testid="savedVideos"
          >
            <Sidebar />
            <SavedPlayListContainer>
              {renderSavedPlayList()}
            </SavedPlayListContainer>
          </SavedVideoContainer>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
