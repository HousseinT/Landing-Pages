import { vi } from 'vitest';

vi.mock('framer-motion', () => {
  const motion = {
    div: 'div',
    section: 'section',
    img: 'img',
    h1: 'h1',
    p: 'p',
  };
  return { motion };
});

class IO {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  // @ts-ignore
  globalThis.IntersectionObserver = IO;
}
