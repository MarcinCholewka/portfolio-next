import React from 'react';

import { Intro } from '@/components/Intro';
import { renderWitNextIntlProvider } from '@/utils/renderWitNextIntlProvider';
import messagesEN from '@/messages/en.json';

import '@testing-library/jest-dom';

describe('<Intro />', () => {
  it('renders without crashing', () => {
    const { container, getByText } = renderWitNextIntlProvider(<Intro />, {
      locale: 'en',
      messages: { Intro: messagesEN.Intro },
    });

    expect(getByText('Contact me here')).toBeInTheDocument();
    expect(getByText('Download CV')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
