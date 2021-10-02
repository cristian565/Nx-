import { render } from '@testing-library/react';

import MainList from './main-list';

describe('MainList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainList />);
    expect(baseElement).toBeTruthy();
  });
});
