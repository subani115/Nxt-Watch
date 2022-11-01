import styled from 'styled-components'

export const SidebarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  height: 90vh;
  padding: 15px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SidebarListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px;
  padding: 0px;
`
export const SidebarListElement = styled.li`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  text-decoration: none;
`

export const SidebarHeading = styled.p`
  color: ${props => (!props.isDarkMode ? '#181818' : '#f9f9f9')};
  margin-left: 5px;
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const SidebarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  margin: 0px;
`
export const BottomImageContainer = styled.div`
  display: flex;
`
export const BottomImage = styled.img`
  width: 30px;
  margin: 5px;
`
