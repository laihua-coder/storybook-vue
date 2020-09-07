
// use element-ui
import Vue from 'vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
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
}

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