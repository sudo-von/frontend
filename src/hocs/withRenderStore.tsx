import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeStore } from 'src/contexts/ThemeContext/ThemeContext';

const withRenderStore = (component: ReactNode) => {
  const WithRenderStore = () => {
    return <ThemeStore>{component}</ThemeStore>;
  };
  return render(<WithRenderStore />);
};

export default withRenderStore;
