import { addons } from '@storybook/addons';

addons.setConfig({
  isFullscreen: false, // 全屏显示storybook组件
  showNav: true, // 显示面板，显示storybook列表
  showPanel: true, // 显示面板，显示附加组件配置
  panelPosition: 'right', // 在何处显示插件面板 bottom or right
  sidebarAnimations: true, // 侧边栏动画
  enableShortcuts: true, // 启用/禁用快捷方式
  isToolshown: true, // 显示/隐藏工具栏
  theme: undefined, // storybook主题
  selectedPanel: undefined, // 选择一个插件面板的ID
  initialActive: 'sidebar', // 在“移动设备”上选择默认的活动标签。sidebar or canvas or addons
  showRoots: true, // 在侧边栏中以“根”的形式显示顶级分组
});