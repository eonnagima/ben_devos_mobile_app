//file created because it's required for Expo to work with environment variables, which is needed so I don't hardcode the APIs and more importantly don't commit them to GitHub.

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }]
    ]
  };
};
