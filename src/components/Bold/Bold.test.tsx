import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeStore } from 'src/contexts/ThemeContext/ThemeContext';
import Bold from './Bold';

describe('<Bold>Hello world</Bold>', () => {
  test('Should display a bold text', () => {
    render(
      <ThemeStore>
        <Bold>Hello world</Bold>
      </ThemeStore>,
    );
    expect(screen.getByText('Hello world')).toHaveStyle('font-weight: bold');
  });
});
