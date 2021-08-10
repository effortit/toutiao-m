module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],

  // plugins: [...productPlugins, '@babel/plugin-syntax-dynamic-import']
  plugins: ['transform-remove-console', '@babel/plugin-syntax-dynamic-import']
}
