import React from 'react';
import { render } from '@testing-library/react';

import { SectionDivider } from '@/components/SectionDivider';

import '@testing-library/jest-dom';

describe('SectionDivider', () => {
  it('renders without crashing', () => {
    const { container, getByTestId } = render(<SectionDivider />);
    const divider = getByTestId('section-divider');

    expect(container).toMatchSnapshot();
    expect(divider).toBeInTheDocument();
  });
});
