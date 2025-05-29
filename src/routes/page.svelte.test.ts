import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render h1', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});

	test('should render institutional text', () => {
		render(Page);
		expect(screen.getByText(/Escolha uma opção no menu/i)).toBeInTheDocument();
	});

	test('should have a link to /home', () => {
		render(Page);
		const link = screen.getByRole('link', { name: /página inicial/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/home');
	});

	test('should have correct styles applied', () => {
		render(Page);
		const section = document.querySelector('.main-landing');
		expect(section).toHaveClass('main-landing');
	});
});
