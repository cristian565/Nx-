import { render } from '@testing-library/react';

import EcommerceUtils from './ecommerce-utils';

describe('EcommerceUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EcommerceUtils />);
    expect(baseElement).toBeTruthy();
  });
});
