const path = require("path");
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// const filterRules = (filters) => (rule) => {
//   return filters.some((filter) => String(rule.test) === String(filter));
// };

module.exports = ({ config }) => {

  const rules = config.module.rules;
  config.resolve.alias = {
    ...config.resolve.alias,
    "~": path.resolve(__dirname, "../stories"),
  };

  config.resolve.extensions.push(
    ".vue",
    ".css",
    ".scss",
    ".sass",
    ".html",
    ".mdx"
  );

  // If you use scss,
  //  config.module.rules.push({ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] })

  rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
  });

  // config.plugins.push(new ForkTsCheckerWebpackPlugin())

  rules.push({
    test: /\.vue$/,
    loader: "vue-docgen-loader",
    options: {
      docgenOptions: {
        alias: config.resolve.alias,
      },
    },
    enforce: "post",
  });

  rules.push({
    test: /\.stories\.[tj]sx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: {
          prettierConfig: {
            printWidth: 100,
            singleQuote: false,
          },
        },
      },
    ],
    exclude: /node_modules/,
    enforce: "pre",
  });

  rules.push({
    test: /\.js|jsx$/,
    loader: "babel-loader",
    exclude: /node_modules/,
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src"),
  };

  return config;
};
