import styled from 'styled-components'

export const SavedVideoContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : 'white')};
`
export const SavedPlayListContainer = styled.ul`
  list-style-type: none;
`
export const NoSavedVideosImage = styled.img`
  width: 40%;
`
