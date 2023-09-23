import React from 'react';

import { About } from '@/components/About';
import { renderWitNextIntlProvider } from '@/utils/renderWitNextIntlProvider';
import messagesEN from '@/messages/en.json';

import '@testing-library/jest-dom';

describe('<About />', () => {
  it('renders without crashing', () => {
    const { container, getByText } = renderWitNextIntlProvider(<About />, {
      locale: 'en',
      messages: {
        About: messagesEN.About,
      },
    });

    expect(container).toMatchSnapshot();
    expect(getByText(messagesEN.About.heading)).toBeInTheDocument();
    expect(getByText(messagesEN.About.hobby)).toBeInTheDocument();
    expect(getByText(messagesEN.About.mainInfo)).toBeInTheDocument();
  });
});
