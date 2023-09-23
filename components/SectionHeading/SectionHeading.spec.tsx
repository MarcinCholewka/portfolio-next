import React from 'react';
import { render } from '@testing-library/react';

import { SectionHeading } from '@/components/SectionHeading';

import '@testing-library/jest-dom';

describe('<SectionHeading />', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<SectionHeading>Section Heading</SectionHeading>);

    expect(container).toMatchSnapshot();
    expect(getByText('Section Heading')).toBeInTheDocument();
  });
});
