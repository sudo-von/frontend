import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes';

const container = document.getElementById('root');

const root = createRoot(container as HTMLElement);

const app = (
  <StrictMode>
    <Router />
  </StrictMode>
);

root.render(app);
