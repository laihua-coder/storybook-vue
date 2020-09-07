module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    // "@storybook/addon-knobs", // 和controls 用法一样
    "@storybook/addon-actions",
    // "'@storybook/addon-storysource'" // 此插件用于在插件面板中显示故事源。
  ],
};