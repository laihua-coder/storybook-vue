// use element-ui
import Vue from "vue";
import ElementUI from "element-ui";
import { ThemeProvider } from "styled-components";
Vue.use(ElementUI);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind
    //     ? 0
    //     : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    storySort:{
      order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components']
    }
  },
  // backgrounds: {
  //   default: "twitter",
  //   values: [
  //     {
  //       name: "twitter",
  //       value: "#00aced",
  //     },
  //     {
  //       name: "facebook",
  //       value: "#3b5998",
  //     },
  //   ],
  // } // 默认情况下，背景工具栏为您提供浅色和深色背景。
};

export const globalTypes = {
  // theme: {
  //   name: 'Theme',
  //   description: 'Global theme for components',
  //   defaultValue: 'dark',
  //   toolbar: {
  //     icon: 'circlehollow',
  //     // array of plain string values or MenuItem shape (see below)
  //     items: ['light', 'dark'],
  //   },
  // }, // 主题色
  // locale: {
  //   name: 'Locale',
  //   description: 'Internationalization locale',
  //   defaultValue: 'en',
  //   toolbar: {
  //     icon: 'globe',
  //     items: [
  //       { value: 'en', right: '🇺🇸', title: 'English' },
  //       { value: 'fr', right: '🇫🇷', title: 'Français' },
  //       { value: 'es', right: '🇪🇸', title: 'Español' },
  //       { value: 'zh', right: '🇨🇳', title: '中文' },
  //       { value: 'kr', right: '🇰🇷', title: '한국어' },
  //     ],
  //   },
  // },  // 本地格式化
};
/**
 * 一些库要求组件层次结构中较高的组件才能正确呈现。
 * 例如，在样式化组件中，如果您的组件使用主题，则需要ThemeProvider。 添加一个全局装饰器，以将该上下文添加到以下所有故事中
 */
// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme="default">
//       <Story />
//     </ThemeProvider>
//   ),
// ];
