import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeStore } from 'src/contexts/ThemeContext/ThemeContext';
import Portfolio from 'src/pages/Portfolio/Portfolio';

const Router = (): JSX.Element => (
  <ThemeStore>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeStore>
);

export default Router;
