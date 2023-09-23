import { NextIntlProvider } from 'next-intl';
import { ReactElement } from 'react';
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';

export const renderWitNextIntlProvider = (
  ui: ReactElement,
  {
    locale = 'en',
    messages = {},
    ...renderOptions
  }: RenderOptions & { locale?: string; messages?: {} } = {}
): RenderResult => {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return (
      <NextIntlProvider locale={locale} messages={messages}>
        {children}
      </NextIntlProvider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
