import { render } from '@testing-library/react';

import CarDetails from './car-details';

describe('CarDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CarDetails />);
    expect(baseElement).toBeTruthy();
  });
});
