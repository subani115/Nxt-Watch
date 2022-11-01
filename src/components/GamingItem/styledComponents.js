import styled from 'styled-components'

export const ThumbnailImage = styled.img`
  width: 400px;
  @media screen and (min-width: 769px) {
    width: 200px;
  }
  @media screen and (max-width: 576px) {
    width: 250px;
  }
  @media screen and (min-width: 577px) and (max-width: 767px) {
    width: 200px;
  }
`

export const VideoListItem = styled.li`
  @media screen and (min-width: 769px) {
    width: 210px;
  }
  width: 410px;
  @media screen and (max-width: 576px) {
    width: 260px;
  }
  @media screen and (min-width: 577px) and (max-width: 767px) {
    width: 210px;
  }
`
export const VideoItemHeading = styled.h1`
  color: ${props => (!props.isDarkMode ? '#64748b' : '#f9f9f9')};
  font-size: 14px;
`

export const ChannelText = styled.p`
  color: ${props => (!props.isDarkMode ? '#64748b' : '#f9f9f9')};
  font-size: 12px;
  margin-left: 0px;
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 5px;
  padding: 0px;
`
export const ChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  padding-left: 10px;
`
export const PublishedDataCountsContainer = styled.div`
  display: flex;
  line-height: 1;
`
