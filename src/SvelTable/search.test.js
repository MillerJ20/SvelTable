/* eslint-disable no-undef */
import { render, screen } from '@testing-library/svelte'
import SvelTable from './SvelTable.svelte';

test('Example test', () => {
  render(SvelTable);
  const node = screen.queryByText('Hello World');
  expect(node).not.toBeNull();
})