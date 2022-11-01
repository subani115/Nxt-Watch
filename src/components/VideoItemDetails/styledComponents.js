import styled from 'styled-components'

export const LoadingElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  color: ${props => (!props.isDarkMode ? 'black' : 'white')};
  height: 60vh;
`
export const VideoItemContainer = styled.div`
  display: flex;
  background-color: ${props => (!props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
`
