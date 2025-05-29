import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import HomePage from './+page.svelte';

describe('HomePage', () => {
  it('renderiza o título principal', () => {
    const { getByText } = render(HomePage);
    expect(getByText('DevZteps Ecommerce')).toBeTruthy();
  });

  it('renderiza o subtítulo', () => {
    const { getByText } = render(HomePage);
    expect(getByText('A plataforma perfeita para criar sua loja, vender e crescer.')).toBeTruthy();
  });

  it('renderiza todos os botões', () => {
    const { getByText } = render(HomePage);
    expect(getByText('Ver Produtos')).toBeTruthy();
    expect(getByText('Começar Agora')).toBeTruthy();
    expect(getByText('Voltar para o início')).toBeTruthy();
  });

  it('botão Voltar para o início aponta para /', () => {
    const { getByText } = render(HomePage);
    const btn = getByText('Voltar para o início').closest('a');
    expect(btn?.getAttribute('href')).toBe('/');
  });
});
