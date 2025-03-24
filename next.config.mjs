import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      { hostname: 'img-s-msn-com.akamaized.net' } 
    ],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  // i18n: {
  //   locales: ['en', 'pt-BR'],
  //   defaultLocale: 'en',
  // }
};

export default withNextIntl(nextConfig);
