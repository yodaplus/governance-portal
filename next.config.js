const path = require('path');

require('dotenv').config({ path: './.env' });

const securityHeaders = [
  // Adds x-xss-protection
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },

  // adds x-frame-options
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },

  // adds x-content-type
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];

//// Main Next.js config
const moduleExports = {
  // everything in here gets exposed to the frontend.
  // prefer NEXT_PUBLIC_* instead, which makes this behavior more explicit
  env: {
    INFURA_KEY: process.env.INFURA_KEY || '84842078b09946638c03157f83405213', // ethers default infura key
    ALCHEMY_KEY: process.env.ALCHEMY_KEY || '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC', // ethers default alchemy key
    POCKET_KEY: process.env.POCKET_KEY,
    ETHERSCAN_KEY: process.env.ETHERSCAN_KEY
  },

  // Opt-in SWC minification (next 12.0.2)
  // swcMinify: true, // fatal runtime error: failed to initiate panic, error 5

  // Fix Sentry error https://github.com/getsentry/sentry-javascript/issues/4103
  outputFileTracing: false,

  webpack: (config, { isServer }) => {
    if (isServer) {
      process.env.USE_FS_CACHE = '';
    } else {
      // Fixes npm packages that depend on `fs` module
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };
    }
    config.resolve.alias['lib'] = path.join(__dirname, 'lib');
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['stores'] = path.join(__dirname, 'stores');
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/delegates/:address',
        destination: '/address/:address'
      }
    ];
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  },

  staticPageGenerationTimeout: 120
};

module.exports = moduleExports;
