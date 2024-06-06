import vue from '@vitejs/plugin-vue';
//一个自动导入组件库样式的vite插件。
import vueJsx from '@vitejs/plugin-vue-jsx';
import configClientEnvPlugin from './configClientEnvPlugin';
import configCompressPlugin from './configCompressPlugin';
import configEslintPlugin from './configEslintPlugin';
import configHtmlPlugin from './configHtmlPlugin';
import configMockPlugin from './configMockPlugin';
import configSvgIconsPlugin from './configSvgIconsPlugin';
import viteCompression from 'vite-plugin-compression';
// import autoprefixer from 'autoprefixer';
import configLegacyPlugin from './configLegacyPlugin';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
  ElementPlusResolver,
  AntDesignVueResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers';

// 以下钩子在服务器启动时被调用：
// options
// buildStart

// 以下钩子会在每个传入模块请求时被调用：
// resolveId
// load
// transform

// 以下钩子在服务器关闭时被调用：
// buildEnd
// closeBundle

export default (isBuild: boolean, mode: viteMode, viteEnv: ImportMetaEnv) => {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  return [
    //客户端环境变量初始化处理
    configClientEnvPlugin(mode),

    vue(),
    vueJsx(),

    configSvgIconsPlugin(isBuild), // svg 处理

    //使用 gzip 或者 brotli 来压缩资源
    configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),

    //注入mock
    configMockPlugin(VITE_USE_MOCK, isBuild, mode),

    //针对 index.html，提供压缩和基于 ejs 模板功能
    configHtmlPlugin(viteEnv, isBuild),

    configLegacyPlugin(),

    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router'],
      dts: 'types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver(), VantResolver(), AntDesignVueResolver()],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),

    Components({
      // 要搜索组件的目录的相对路径
      dirs: ['src/components'],
      // 组件的有效文件扩展名
      extensions: ['vue', 'md'],
      // 搜索子目录
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/],
      // 生成自定义 `auto-components.d.ts` 全局声明
      dts: 'types/auto-components.d.ts',
      // 自定义组件的解析器
      resolvers: [ElementPlusResolver(), VantResolver(), AntDesignVueResolver()],
      exclude: [/[\\/]node_modules[\\/]/],
    }),

    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于 threshold 才会被压缩,单位 b
      algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz', // 生成的压缩包后缀
      deleteOriginFile: false, //压缩后是否删除源文件
    }),

    // configEslintPlugin(),

    // configStyleImportPlugin(isBuild)

    // autoprefixer,
  ];
};
