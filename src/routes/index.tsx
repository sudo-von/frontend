import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeStore } from 'src/contexts/ThemeContext/ThemeContext';
import Portfolio from 'src/pages/Portfolio/Portfolio';

const Router = (): JSX.Element => (
  <ThemeStore>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  </ThemeStore>
);

export default Router;
