import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import { GlobalStyles } from './components/GlobalStyles'
import { theme } from './theme/theme'
import { Home } from './pages/Home'
import { WeatherDetails } from './pages/WeatherDetails'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/weather/:city' component={WeatherDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
