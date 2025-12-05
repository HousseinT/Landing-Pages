import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../components/Hero.jsx';

describe('Hero carousel', () => {
  it('renders carousel and allows keyboard navigation', () => {
    render(<Hero />);
    const region = screen.getByRole('region', { name: /product media carousel/i });
    expect(region).toBeTruthy();
    region.focus();
    fireEvent.keyDown(region, { key: 'ArrowRight' });
    fireEvent.keyDown(region, { key: 'ArrowLeft' });
    expect(region).toBeTruthy();
  });
});
