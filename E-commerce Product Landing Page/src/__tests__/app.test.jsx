import React from 'react';
import { describe, it, expect } from 'vitest';
import { createRoot } from 'react-dom/client';
import App from '../App.jsx';

describe('App rendering', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    root.render(<App />);
    expect(container).toBeTruthy();
    root.unmount();
  });
});
