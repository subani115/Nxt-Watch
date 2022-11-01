import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  background-size: cover;
  min-height: 100vh;
`
export const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  line-height: 1.5;
`
export const NotFoundImage = styled.img`
  width: 300px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (!props.isDarkMode ? '#64748b' : '#f9f9f9')};
  padding: 0px;
  margin: 0px;
`
export const NotFoundPara = styled.p`
  color: ${props => (!props.isDarkMode ? '#64748b' : '#f9f9f9')};
  text-align: center;
  padding: 0px;
  margin: 0px;
`
