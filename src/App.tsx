import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio/Portfolio'

const App:React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Portfolio/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App