import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeStore } from 'src/contexts/ThemeContext/ThemeContext'
import Portfolio from './pages/Portfolio/Portfolio'

const App:React.FC = () => {
  return(
    <ThemeStore>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Portfolio/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeStore>
  )
}

export default App