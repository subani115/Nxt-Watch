import styled from 'styled-components'

export const HomePageVideoContainer = styled.div`
  display: flex;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 25vh;
  padding: 20px;
`

export const ImageContainer = styled.div`
  display: flex;
`
export const LogoImage = styled.img`
  width: 20%;
`
export const LoadingElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (!props.isDarkMode ? '#0f0f0f' : 'white')};
  height: 60vh;
`
export const VideoItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : 'white')};
  height: ${props => (props.isBannerOpen ? '60vh' : '90vh')};
`
export const VideoItemList = styled.ul`
  list-style-type: none;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  max-width: 250px;
  height: 28px;
  padding-right: 5px;
  margin: 10px;
`
export const SearchInputElement = styled.input`
  margin: 10px;
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
  border: none;
  outline: none;
  width: 100%;
`
