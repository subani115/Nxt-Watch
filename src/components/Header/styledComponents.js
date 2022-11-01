import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const HeaderImageElement = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
`
export const HeaderLogoImg = styled.img`
  width: 30%;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 55%;
    padding: 0px;
  }
`
export const RightHeaderElements = styled.ul`
  display: flex;
`
export const HeaderButtonElement = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isDarkMode ? 'white' : 'black')};
`
export const HeaderLogoutButton = styled(HeaderButtonElement)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`
export const HeaderLogoutText = styled.button`
  border: ${props => (props.isDarkMode ? '1px solid white' : '1px solid blue')};
  background-color: transparent;
  color: ${props => (props.isDarkMode ? 'white' : '#4f46e5')};
  padding: 5px 8px 5px 8px;
  height: 30px;
  width: 70px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeaderBurgerElement = styled(HeaderButtonElement)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`

// sidebar

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
