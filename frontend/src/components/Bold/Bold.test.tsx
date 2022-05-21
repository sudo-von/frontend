import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import withRendererStore from 'src/hocs/withRendererStore';
import withRenderStore from 'src/hocs/withRenderStore';
import Bold from './Bold';

describe('Bold component', () => {
  test('Should display a bold text', () => {
    withRenderStore(<Bold>Hello world</Bold>);
    expect(screen.getByText('Hello world')).toHaveStyle('font-weight: bold');
  });

  test('Should render a bold text', () => {
    const tree = withRendererStore(<Bold>Hello world</Bold>);
    expect(tree).toMatchSnapshot();
  });
});
