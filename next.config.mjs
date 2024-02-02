/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map((oneOfRule) => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('svg')) {
            return {
              ...oneOfRule,
              exclude: /\.svg$/i,
            };
          }

          return oneOfRule;
        });
      }

      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  experimental: {
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
};

export default nextConfig;
