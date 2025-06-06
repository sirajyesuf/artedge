import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  './app/i18n/request.ts'
);

const nextConfig: NextConfig = {
  ignoreDuringBuilds: true,
};

module.exports = withNextIntl(nextConfig);
