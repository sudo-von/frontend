import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeStore } from 'src/contexts/ThemeContext/ThemeContext';
import Portfolio from 'src/pages/Portfolio/Portfolio';
import Blog from 'src/pages/Blog/Blog';

const Router = (): JSX.Element => (
  <ThemeStore>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </ThemeStore>
);

export default Router;
