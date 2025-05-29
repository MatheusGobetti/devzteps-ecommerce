import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Button from './Button.svelte';

describe('Button component', () => {
  it('renders with correct label', () => {
    const { getByText } = render(Button, { props: { label: 'Comprar', href: '/checkout' } });
    expect(getByText('Comprar')).toBeTruthy();
  });

  it('has correct href', () => {
    const { getByRole } = render(Button, { props: { label: 'Checkout', href: '/checkout' } });
    const link = getByRole('link');
    expect(link.getAttribute('href')).toBe('/checkout');
  });

  it('applies primary variant by default', () => {
    const { getByRole } = render(Button, { props: { label: 'Teste' } });
    const link = getByRole('link');
    expect(link.className).toContain('bg-blue-600');
  });

  it('applies secondary variant', () => {
    const { getByRole } = render(Button, { props: { label: 'Teste', variant: 'secondary' } });
    const link = getByRole('link');
    expect(link.className).toContain('border-blue-600');
  });
});
