import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginMainContainer,
  FormContainer,
  LogoImage,
  InputElementContainer,
  LoginButtonContainer,
  LoginButton,
  ErrorMsg,
  InputElement,
  ImageContainer,
  CheckboxContainer,
  CheckboxElement,
  LabelDescription,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login/', options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showErrorMsg,
      showPassword,
    } = this.state

    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const logoImage = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginMainContainer isDarkMode={isDarkMode}>
              <FormContainer onSubmit={this.submitForm} isDarkMode={isDarkMode}>
                <ImageContainer>
                  <LogoImage src={logoImage} alt="website logo" />
                </ImageContainer>
                <InputElementContainer>
                  <LabelDescription htmlFor="username" isDarkMode={isDarkMode}>
                    USERNAME
                  </LabelDescription>
                  <InputElement
                    id="username"
                    value={username}
                    type="text"
                    placeholder="USERNAME"
                    onChange={this.changeUsername}
                    className="input-element"
                  />
                </InputElementContainer>
                <InputElementContainer>
                  <LabelDescription htmlFor="password" isDarkMode={isDarkMode}>
                    PASSWORD
                  </LabelDescription>
                  <InputElement
                    id="password"
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="PASSWORD"
                    onChange={this.changePassword}
                    className="input-element"
                  />
                </InputElementContainer>
                <CheckboxContainer>
                  <CheckboxElement
                    type="checkbox"
                    id="showPassword"
                    onClick={this.showPassword}
                  />
                  <LabelDescription
                    htmlFor="showPassword"
                    isDarkMode={isDarkMode}
                  >
                    Show Password
                  </LabelDescription>
                </CheckboxContainer>
                <LoginButtonContainer>
                  <LoginButton type="submit">Login</LoginButton>
                </LoginButtonContainer>
                {showErrorMsg && (
                  <ErrorMsg className="error-msg">*{errorMsg}</ErrorMsg>
                )}
              </FormContainer>
            </LoginMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login
