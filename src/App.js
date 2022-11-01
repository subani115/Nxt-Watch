import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound/index'
import VideoItemDetails from './components/VideoItemDetails/index'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import Trending from './components/Trending'

import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkMode: false, savedPlayList: []}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addToSavedPlayList = videoItemDetails => {
    const {savedPlayList} = this.state
    const videoObject = savedPlayList.find(
      each => each.id === videoItemDetails.id,
    )
    console.log(videoObject)
    if (videoObject) {
      return null
    }
    return this.setState(prevState => ({
      savedPlayList: [...prevState.savedPlayList, videoItemDetails],
    }))
  }

  render() {
    const {isDarkMode, savedPlayList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkMode,
          savedPlayList,
          toggleTheme: this.toggleTheme,
          addToSavedPlayList: this.addToSavedPlayList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
