module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        // Optional:
        // allowlist: ['API_URL'],
        // blocklist: ['SECRET_KEY'],
        safe: false,
        allowUndefined: true,
      },
    ],
    // 'react-native-reanimated/plugin', // Uncomment if using Reanimated
  ],
};
