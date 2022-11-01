import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const FormContainer = styled.form`
  box-shadow: ${props =>
    props.isDarkMode ? 'none' : '5px 5px 5px 5px #e2e8f0'};
  background-color: ${props => (props.isDarkMode ? 'black' : '#f9f9f9')};
  padding: 20px;
  height: 350px;
  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`
export const LogoImage = styled.img`
  width: 50%;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`
export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: auto;
`
export const LoginButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 10px;
  width: 100%;
`
export const LabelDescription = styled.label`
  color: ${props => (!props.isDarkMode ? '#64748b' : '#f9f9f9')};
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const ErrorMsg = styled.p`
  color: red;
`
export const InputElement = styled.input`
  border: 1px solid #e2e8f0;
  margin-top: 10px;
  padding: 10px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxElement = styled.input`
  margin-left: 10px;
  margin-right: 10px;
`
