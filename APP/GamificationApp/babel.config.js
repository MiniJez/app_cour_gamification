module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: [
          "./src"
        ],
        extensions: [
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
        ],
        alias: {
          "*": ".",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@styles": "./src/styles",
          "@utils": "./src/utils"
        }
      }
    ]
  ]
};
