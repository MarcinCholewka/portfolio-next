/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "next-intl",
    "use-intl",
    "intl-messageformat",
    "tslib",
    "@formatjs",
  ],
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl(nextConfig);
