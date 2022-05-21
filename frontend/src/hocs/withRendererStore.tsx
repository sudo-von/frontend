import renderer from 'react-test-renderer';
import { ReactNode } from 'react';
import { ThemeStore } from 'src/contexts/ThemeContext/ThemeContext';

const withRendererStore = (component: ReactNode) => {
  const WithRendererStore = () => {
    return <ThemeStore>{component}</ThemeStore>;
  };
  return renderer.create(<WithRendererStore />).toJSON();
};

export default withRendererStore;
