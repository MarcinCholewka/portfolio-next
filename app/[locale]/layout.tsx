import cx from "classnames";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { useLocale, useMessages, NextIntlClientProvider } from "next-intl";

import { Header } from "@/components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type Params = {
  locale: "pl" | "en";
};

export const metadata = {
  title: "Marcin Cholewka",
  description: "I'm a frontend developer",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const locale = useLocale();
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={cx(
          inter.className,
          "relative text-gray-950 h-[5000px] pt-24 sm:pt-32"
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
