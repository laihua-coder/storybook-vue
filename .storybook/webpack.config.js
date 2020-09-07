const path = require('path')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const filterRules = filters => rule => {
  return filters.some(filter => String(rule.test) === String(filter))
}

module.exports = ({ config }) => {
  const rules = config.module.rules
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../stories'),
  }

  config.resolve.extensions.push(
    '.vue',
    '.css',
    '.scss',
    '.sass',
    '.html',
    '.mdx',
  )


  // If you use scss,
  //  config.module.rules.push({ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] })

  rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  })

  // config.plugins.push(new ForkTsCheckerWebpackPlugin())

  rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    options: {
      docgenOptions: {
        alias: config.resolve.alias,
      },
    },
    enforce: 'post',
  })

  // rules.push({
  //   test: /\.js$/,
  //   resourceQuery: /component/,
  //   loader: 'vue-docgen-loader',
  //   enforce: 'post',
  // })

  // rules.push({
  //   test: /\.stories\.js$/,
  //   loaders: [require.resolve('@storybook/addon-storysource/loader')],
  //   enforce: 'pre',
  // })

  // const mdxRules = rules.filter(
  //   filterRules([/\.mdx$/, /\.(stories|story).mdx$/]),
  // )
  // mdxRules.forEach(mdxRule => {
  //   const [babelLoader] = mdxRule.use.filter(({ loader }) =>
  //     loader.includes('babel-loader'),
  //   )
  //   babelLoader.options.presets = babelLoader.options.presets.filter(
  //     preset => !preset.includes('babel-preset-vue'),
  //   )
  // })

  // const [jsxRule] = rules.filter(filterRules([/\.(mjs|jsx?)$/]))
  // const [babelLoader] = jsxRule.use.filter(({ loader }) =>
  //   loader.includes('babel-loader'),
  // )
  // babelLoader.options = {
  //   cacheDirectory: path.resolve(
  //     __dirname,
  //     '..',
  //     'node_modules',
  //     '.cache',
  //     'storybook',
  //   ),
  //   presets: ['@vue/app'],
  //   babelrc: false,
  // }

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src')
  }

  return config
}
