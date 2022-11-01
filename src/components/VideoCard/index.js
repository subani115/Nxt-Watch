import {Component} from 'react'
import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import {
  ActionButton,
  ActionsContainer,
  LikesContainer,
  Heading,
} from './styledComponents'

class VideoCard extends Component {
  state = {isSaved: false, isDislikeActive: false, isLikeActive: false}

  render() {
    const {isSaved, isLikeActive, isDislikeActive} = this.state
    const {videoItemDetails} = this.props

    const {
      channel,
      description,
      publishedAt,
      videoUrl,
      title,
      viewCount,
    } = videoItemDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {addToSavedPlayList} = value

          const addToSavedList = () => {
            this.setState(prevState => ({isSaved: !prevState.isSaved}))
            addToSavedPlayList(videoItemDetails)
          }

          const activeDislike = () => {
            if (!isLikeActive) {
              this.setState(prevState => ({
                isDislikeActive: !prevState.isDislikeActive,
              }))
            }
          }

          const activeLike = () => {
            if (!isDislikeActive) {
              this.setState(prevState => ({
                isLikeActive: !prevState.isLikeActive,
              }))
            }
          }

          const saveText = isSaved ? 'Saved' : 'Save'

          return (
            <LikesContainer>
              <ReactPlayer url={videoUrl} />
              <Heading>{title}</Heading>
              <ActionsContainer>
                <div>
                  <p>{viewCount} views</p>
                  <p>
                    .
                    {formatDistanceToNow(new Date(publishedAt), {
                      addSuffix: false,
                    })}{' '}
                    ago
                  </p>
                </div>
                <div>
                  <ActionButton type="button" onClick={activeLike}>
                    <p>Like</p>
                    <BiLike
                      size={20}
                      color={isLikeActive ? '#2563eb' : ' #64748b '}
                    />
                  </ActionButton>
                  <ActionButton type="button" onClick={activeDislike}>
                    <p>Dislike</p>
                    <BiDislike
                      size={20}
                      color={isDislikeActive ? '#2563eb' : ' #64748b '}
                    />
                  </ActionButton>
                  <ActionButton type="button" onClick={addToSavedList}>
                    <RiPlayListAddLine size={20} />
                    <p>{saveText}</p>
                  </ActionButton>
                </div>
              </ActionsContainer>
              <hr />
              <img src={channel.profile_image_url} alt={channel.name} />
              <h1>{channel.name}</h1>
              <p>{channel.subscriber_count} subscribers</p>
              <p>{description}</p>
            </LikesContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoCard
